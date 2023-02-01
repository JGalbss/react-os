import Image from 'next/image';
import { useEffect, useState } from 'react';
import BackgroundGif from '@/public/images/background.gif';
import { Transition } from '@headlessui/react';
import { useNProgress } from '@tanem/react-nprogress';
import clsx from 'clsx';
import { atom, useRecoilState } from 'recoil';
import APPS from '@/components/apps';
import Dock from '@/components/common/dock';
import Nav from '@/components/common/nav';
import LoadingPage from '@/components/pages/loading';

/* Constants */
// size of border around computer
export const COMPUTER_FRAME_SIZE = 75;

/* Page Atoms */
export const windowExpandedAtom = atom({
  key: 'windowExpanded', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});

/* Page */
export default function Home() {
  const { progress } = useNProgress({
    isAnimating: true,

    incrementDuration: 1,
  });

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  /* States */
  const [isLoading, setIsLoading] = useState(true);
  const [windowSelected, setWindowSelected] = useState<string | undefined>(APPS[0].name);
  const [windowExpanded, setWindowExpanded] = useRecoilState(windowExpandedAtom);

  return (
    <>
      <div className="h-screen w-screen bg-[#f9f1d0] p-[50px]">
        <div className="h-full overflow-hidden border-[25px] border-[#ded7ba]">
          <Transition
            show={false}
            enter="transition-opacity duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-2000"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            className="h-screen w-full"
          >
            <LoadingPage progress={progress} />
          </Transition>

          <div className={clsx('z-10 h-full bg-black/50', false ? 'hidden' : 'block')}>
            <div className="relative flex h-screen w-full flex-col items-start justify-center bg-[#4258C6]">
              <Nav classNames={'z-50'} />
              <Dock
                windowSelected={windowSelected as string}
                setWindowSelected={setWindowSelected}
                apps={APPS}
                classNames={clsx(
                  'absolute bottom-[150px]',
                  windowExpanded != '' ? 'z-10' : 'z-[100]',
                )}
              />
              <div className="z-[90] flex h-full w-full">
                {APPS.map((app) => {
                  return (
                    <app.window
                      windowSelected={windowSelected}
                      setWindowSelected={setWindowSelected}
                      classNames={clsx('z-50')}
                    />
                  );
                })}
              </div>
              <div className="absolute bottom-0 z-10">
                <Image alt="Background Image" src={BackgroundGif} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
