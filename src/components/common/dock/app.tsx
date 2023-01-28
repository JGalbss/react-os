import { FC } from 'react';
import clsx from 'clsx';
import type { AppNames } from '.';

/* Props */
export type AppProps = {
  name: AppNames;
  onClick: () => void;
  icon: any;
  colorClassnames: string;
  isClosed: boolean;
};

/* Component */
const App: FC<AppProps> = ({ name, onClick, icon, colorClassnames, isClosed }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        key={name}
        className={clsx(
          'relative flex w-fit transform transform items-center justify-center rounded-lg p-3',
          'transition duration-200 ease-in-out hover:-translate-y-5',
          colorClassnames,
        )}
        onClick={onClick}
      >
        {icon}
      </div>
      {!isClosed && <div className="mt-2 flex h-2 w-2 rounded-full bg-white" />}
    </div>
  );
};

export default App;
