import Image from 'next/image';
import { useEffect, useState } from 'react';
import BackgroundGif from '@/public/images/background.gif';
import { Transition } from '@headlessui/react';
import { useNProgress } from '@tanem/react-nprogress';
import clsx from 'clsx';
import Dock from '@/components/common/dock';
import LoadingPage from '@/components/pages/loading';

/* Page */
export default function Home() {
  /* States */
  const [isLoading, setIsLoading] = useState(true);

  const { progress } = useNProgress({
    isAnimating: true,

    incrementDuration: 1,
  });

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <div className="h-screen w-screen bg-[#f9f1d0] p-[50px]">
        <div className="h-full overflow-hidden border-[25px] border-[#ded7ba]">
          <Transition
            show={isLoading}
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

          <div className={clsx('z-10 h-full bg-black/50', isLoading ? 'hidden' : 'block')}>
            <div className="relative flex h-screen w-full items-center justify-center bg-[#4258C6]">
              <Dock />

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
