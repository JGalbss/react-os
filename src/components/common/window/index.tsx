import { FC, useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import clsx from 'clsx';
import { Rnd } from 'react-rnd';
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
      setWindowHeight(window.innerHeight);
      setWindowWidth(window.innerWidth);
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
          onClick={() => setMinimized(true)}
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

  const [minimized, setMinimized] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Transition
      appear={true}
      show={!minimized}
      hidden={minimized}
      enter="transition-opacity duration-2000"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-2000"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Rnd
        className={clsx(classNames, 'min-h-[200px] min-w-[200px]')}
        default={{
          x: 0,
          y: 0,
          width: 500,
          height: 500,
        }}
        position={isExpanded ? { x: 0, y: 0 } : undefined}
        size={{ width: isExpanded ? windowWidth : 500, height: isExpanded ? windowHeight : 500 }}
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
    </Transition>
  );
};

export default Window;
