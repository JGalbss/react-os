import { FC } from 'react';
import clsx from 'clsx';

/* Types */
type NavProps = {
  classNames?: string;
};

/* Component */
const Nav: FC<NavProps> = ({ classNames }) => {
  return (
    <div className={clsx(classNames)}>
      <div>josh</div>
    </div>
  );
};

export default Nav;
