import { type FC, useMemo } from 'react';
import clsx from 'clsx';
import { useRecoilState } from 'recoil';
import { openApps } from 'src/lib/atoms/apps';
import type { AppNames } from '.';

/* Props */
export type AppProps = {
  name: AppNames;
  icon: any;
  colorClassnames: string;
};

/* Component */
const App: FC<AppProps> = ({ name, icon, colorClassnames }) => {
  /* Recoil States */
  const [openAppsState, setOpenAppsState] = useRecoilState(openApps);

  /* Memoized States */
  const isClosed = useMemo(() => {
    return !openAppsState.includes(name);
  }, [openAppsState]);

  const areAppsExpanded = useMemo(() => {
    return openAppsState.length > 0;
  }, [openAppsState]);

  return (
    <div className="flex aspect-square flex-col items-center justify-center">
      <div
        key={name}
        className={clsx(
          'relative flex aspect-square h-full w-full items-center justify-center rounded-lg p-3',
          'transition duration-200 ease-in-out',
          colorClassnames,
        )}
        onClick={() => setOpenAppsState([...openAppsState, name])}
      >
        {icon}
      </div>
      <div
        className={clsx(
          'mt-2 flex h-2 w-2 rounded-full bg-white',
          isClosed && areAppsExpanded && 'invisible',
          isClosed && !areAppsExpanded && 'hidden',
        )}
      />
    </div>
  );
};

export default App;
