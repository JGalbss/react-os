import type { Dispatch, SetStateAction } from 'react';
import { FC, ReactNode, useEffect, useState } from 'react';
import clsx from 'clsx';
import { Rnd } from 'react-rnd';
import { useRecoilState } from 'recoil';
import { COMPUTER_FRAME_SIZE, windowExpandedAtom } from 'src/pages';
import Icon from '../icons';

/* Props */
type WindowProps = {
  classNames?: string;
  isClosed: boolean;
  setIsClosed: (value: boolean) => void;
  windowSelected: string | undefined;
  setWindowSelected: Dispatch<SetStateAction<string | undefined>>;
  children?: ReactNode;
  name: string;
};

/* Component */
const Window: FC<WindowProps> = ({
  classNames,
  isClosed,
  setIsClosed,
  windowSelected,
  setWindowSelected,
  children,
  name,
}) => {
  /* States */
  const [windowHeight, setWindowHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [windowExpanded, setWindowExpanded] = useRecoilState(windowExpandedAtom);

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowHeight(window.innerHeight - COMPUTER_FRAME_SIZE * 2);
      setWindowWidth(window.innerWidth - COMPUTER_FRAME_SIZE * 2);
    };

    window.addEventListener('resize', updateWindowSize);
    updateWindowSize();

    return () => {
      window.removeEventListener('resize', updateWindowSize);
      console.log(windowWidth, windowHeight);
      setIsLoaded(true);
    };
  }, []);

  /* Constants */
  const isExpanded = windowExpanded === name;
  const isWindowSelected = windowSelected === name;

  const WINDOW_ACTIONS = [
    {
      name: 'close',
      icon: (
        <div
          onClick={() => setIsClosed(true)}
          className="flex cursor-pointer items-center justify-center rounded-full bg-red-500 p-0.5"
        >
          <div className="h-full w-full opacity-0 hover:opacity-100">
            <Icon.X className={'fill-red-800'} height={10} width={10} />
          </div>
        </div>
      ),
    },
    {
      name: 'minimize',
      icon: (
        <div
          onClick={() => setWindowExpanded('')}
          className="flex cursor-pointer items-center justify-center rounded-full bg-yellow-500 p-0.5"
        >
          <div className="h-full w-full opacity-0 hover:opacity-100">
            <Icon.Minus className={'text-yellow-800'} height={10} width={10} />
          </div>
        </div>
      ),
    },
    {
      name: 'expand',
      icon: (
        <div
          onClick={() => setWindowExpanded(name)}
          className="flex cursor-pointer items-center justify-center rounded-full bg-green-500 p-0.5"
        >
          <div className="h-full w-full opacity-0 hover:opacity-100">
            <Icon.Expand className={'text-green-800'} height={10} width={10} />
          </div>
        </div>
      ),
    },
  ];

  if (!isLoaded) {
    return <div />;
  }

  return (
    <Rnd
      className={clsx(
        classNames,
        'min-h-[200px] min-w-[200px]',
        isClosed ? 'invisible' : 'visible',
        isExpanded && 'z-[100]',
        isWindowSelected ? 'z-[100]' : 'z-[80]',
      )}
      default={{
        x: windowWidth / 2 - 250,
        y: windowHeight / 2 - 300,
        width: 500,
        height: 500,
      }}
      position={isExpanded ? { x: 0, y: 0 } : undefined}
      size={
        isExpanded
          ? {
              width: windowWidth,
              height: windowHeight,
            }
          : undefined
      }
      bounds="parent"
      disableDragging={isExpanded}
      disableResizing={isExpanded}
      onClick={() => setWindowSelected(name)}
    >
      <div className="relative h-full w-full overflow-hidden rounded-xl bg-gray-200">
        <div className="flex h-[40px] w-full items-center justify-start space-x-3 bg-[#83adea] p-3">
          {WINDOW_ACTIONS.map((action, index) => {
            return action.icon;
          })}
        </div>
        <div className="absolute left-[90px] top-[8px] z-10 h-[38px] w-fit rounded-lg bg-[#cbdcf7] py-1.5 px-3">
          <p className="text-sm">{name}</p>
        </div>
        <div className="z-20 flex h-[40px] w-full bg-[#cbdcf7]">
          <div
            className="flex w-full items-center space-x-2 
        px-3"
          >
            <div className="rounded-full p-1 hover:bg-black/10">
              <Icon.ArrowLeft className={'fill-gray-800 stroke-2'} height={15} width={15} />
            </div>
            <div className="rounded-full p-1 hover:bg-black/10">
              <Icon.ArrowRight className={'fill-gray-800 stroke-2'} height={15} width={15} />
            </div>
            <div className="flex w-full">
              <input placeholder="Josh Galbreath - Portfolio" className="w-full rounded-lg px-2" />
            </div>
          </div>
        </div>
        <div
          style={{ height: 'calc(100% - 76px)' }}
          className="scrollbar-hide flex w-full overflow-y-scroll"
        >
          {children}
        </div>
      </div>
    </Rnd>
  );
};

export default Window;
