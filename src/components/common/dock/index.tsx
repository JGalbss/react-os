import { useState } from 'react';
import clsx from 'clsx';
import Icon from '@/components/common/icons';
import type { AppProps } from './app';
import App from './app';

/* Types */
export type Apps = 'Profile' | 'Music' | 'Mint' | undefined;

/* Constants */
const APPS: AppProps[] = [
  {
    name: 'Profile',
    icon: <Icon.Profile height={40} width={40} />,
    onClick: () => console.log('Profile'),
    colorClassnames: 'bg-red-500 hover:bg-red-600',
  },
  {
    name: 'Music',
    icon: <Icon.Music height={40} width={40} />,
    onClick: () => console.log('Music'),
    colorClassnames: 'bg-green-500 hover:bg-green-600',
  },
  {
    name: 'Mint',
    icon: <Icon.Rocket height={40} width={40} />,
    onClick: () => console.log('Mint'),
    colorClassnames: 'bg-orange-500 hover:bg-orange-600',
  },
];

/* Component */
const Dock = () => {
  /* States */
  const [appHovered, setAppHovered] = useState<Apps>(undefined);

  return (
    <div className="absolute bottom-[150px] z-50 w-full p-[25px]">
      <div className="flex w-full items-center justify-center">
        <div className="flex w-fit items-center justify-center space-x-3 rounded-xl p-3 backdrop-blur-md">
          {APPS.map((app, index) => {
            const isHovered = appHovered === app.name;
            const isUndefined = appHovered === undefined;
            return (
              <div
                onMouseEnter={() => setAppHovered(app.name)}
                onMouseLeave={() => setAppHovered(undefined)}
                className={clsx(
                  !isHovered && !isUndefined && 'blur-[1px] transition duration-300 ease-in-out',
                )}
              >
                <App key={index} {...app} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dock;
