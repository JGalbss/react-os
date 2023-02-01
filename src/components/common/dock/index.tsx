import type { Dispatch, SetStateAction } from 'react';
import { FC, useState } from 'react';
import clsx from 'clsx';
import { App } from '@/components/apps';
import Tooltip from '@/components/templates/tooltip';

/* Types */
export type AppNames = 'Profile' | 'Music' | 'Mint' | undefined;

/* Props */
type DockProps = {
  classNames?: string;
  apps: App[];
  windowSelected: string;
  setWindowSelected: Dispatch<SetStateAction<string | undefined>>;
};

/* Component */
const Dock: FC<DockProps> = ({ classNames, apps, windowSelected, setWindowSelected }) => {
  /* States */
  const [appHovered, setAppHovered] = useState<string | undefined>(undefined);

  return (
    <div className={clsx('w-full p-[25px]', classNames)}>
      <div className="flex w-full items-center justify-center">
        <div className="flex w-fit items-center justify-center space-x-3 rounded-xl p-3 backdrop-blur-md">
          {apps.map((app, index) => {
            const isHovered = appHovered === app.name;
            const isUndefined = appHovered === undefined;
            return (
              <Tooltip
                className={clsx(
                  'z-[100] mb-7 rounded-xl bg-gray-800/50 px-3 py-2 backdrop-blur-sm',
                )}
                content={<p className="text-gray-100">{app.name}</p>}
              >
                <div
                  onMouseEnter={() => setAppHovered(app.name)}
                  onMouseLeave={() => setAppHovered(undefined)}
                  className={clsx(
                    !isHovered && !isUndefined && 'blur-[1px] transition duration-300 ease-in-out',
                  )}
                >
                  {
                    <app.app
                      windowSelected={windowSelected}
                      setWindowSelected={setWindowSelected}
                    />
                  }
                </div>
              </Tooltip>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dock;
