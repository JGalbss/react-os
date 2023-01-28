import { FC, useEffect, useState } from 'react';
import clsx from 'clsx';
import { Rnd } from 'react-rnd';
import { COMPUTER_FRAME_SIZE } from 'src/pages';
import Icon from '../icons';

/* Props */
type WindowProps = {
  classNames?: string;
};

/* Component */
const Window: FC<WindowProps> = ({ classNames }) => {
  const [windowHeight, setWindowHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowHeight(window.innerHeight - COMPUTER_FRAME_SIZE * 2);
      setWindowWidth(window.innerWidth - COMPUTER_FRAME_SIZE * 2);
      console.log(windowWidth, windowHeight);
    };

    window.addEventListener('resize', updateWindowSize);
    updateWindowSize();

    return () => {
      window.removeEventListener('resize', updateWindowSize);
    };
  }, []);

  const WINDOW_ACTIONS = [
    {
      name: 'close',
      icon: (
        <div
          onClick={() => setIsClosed(true)}
          className="flex cursor-pointer items-center justify-center rounded-full bg-red-500 p-1"
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
          onClick={() => setIsExpanded(false)}
          className="flex cursor-pointer items-center justify-center rounded-full bg-yellow-500 p-1"
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
          onClick={() => setIsExpanded(true)}
          className="flex cursor-pointer items-center justify-center rounded-full bg-green-500 p-1"
        >
          <div className="h-full w-full opacity-0 hover:opacity-100">
            <Icon.Expand className={'text-green-800'} height={10} width={10} />
          </div>
        </div>
      ),
    },
  ];

  const [isClosed, setIsClosed] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Rnd
      className={clsx(
        classNames,
        'min-h-[200px] min-w-[200px]',
        isClosed && 'invisible',
        isExpanded && 'z-[100]',
      )}
      default={{
        x: 0,
        y: 0,
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
      disableDragging={isExpanded}
      disableResizing={isExpanded}
    >
      <div className="relative h-full w-full overflow-hidden rounded-xl bg-gray-200">
        <div className="flex h-[40px] w-full items-center justify-start space-x-3 bg-[#83adea] p-3">
          {WINDOW_ACTIONS.map((action, index) => {
            return action.icon;
          })}
        </div>
      </div>
    </Rnd>
  );
};

export default Window;
