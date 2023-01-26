import { FC } from 'react';
import clsx from 'clsx';
import type { Apps } from '.';

/* Props */
export type AppProps = {
  name: Apps;
  onClick: () => void;
  icon: any;
  colorClassnames: string;
};

/* Component */
const App: FC<AppProps> = ({ name, onClick, icon, colorClassnames }) => {
  return (
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
  );
};

export default App;
