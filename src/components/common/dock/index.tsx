import type { Dispatch, SetStateAction } from 'react';
import { FC, useState } from 'react';
import clsx from 'clsx';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import useMeasure from 'react-use-measure';
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
  let mouseX = useMotionValue(Infinity);
  /* States */
  const [appHovered, setAppHovered] = useState<string | undefined>(undefined);

  return (
    <div className={clsx('w-full p-[25px]', classNames)}>
      <div className="flex w-full items-center justify-center">
        <motion.div
          onMouseMove={(e) => mouseX.set(e.pageX)}
          onMouseLeave={() => mouseX.set(Infinity)}
          className="flex w-fit items-end justify-center space-x-3 rounded-xl p-3 backdrop-blur-md"
        >
          {apps.map((app, index) => {
            /* COnstants */
            const isHovered = appHovered === app.name;
            const isUndefined = appHovered === undefined;

            /* Hooks */
            let [ref, bounds] = useMeasure();
            let distance = useTransform(mouseX, (val) => val - bounds.left - bounds.width / 2);
            let widthSync = useTransform(distance, [-200, 0, 200], [40, 100, 40]);
            let width = useSpring(widthSync, {
              mass: 0.1,
              stiffness: 150,
              damping: 12,
            });

            return (
              <Tooltip
                key={index}
                className={clsx(
                  'z-[100] mb-7 rounded-xl bg-gray-800/50 px-3 py-2 backdrop-blur-sm',
                )}
                content={<p className="text-gray-100">{app.name}</p>}
              >
                <motion.div
                  ref={ref}
                  style={{ width }}
                  onMouseEnter={() => setAppHovered(app.name)}
                  onMouseLeave={() => setAppHovered(undefined)}
                  className={clsx(
                    !isHovered &&
                      !isUndefined &&
                      'aspect-square blur-[1px] transition duration-300 ease-in-out',
                  )}
                >
                  {
                    <app.app
                      windowSelected={windowSelected}
                      setWindowSelected={setWindowSelected}
                    />
                  }
                </motion.div>
              </Tooltip>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Dock;
