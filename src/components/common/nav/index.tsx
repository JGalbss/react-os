import Image from 'next/image';
import { FC } from 'react';
import ProfilePic from '@/public/images/profile-pic.png';
import clsx from 'clsx';

/* Types */
type NavProps = {
  classNames?: string;
};

/* Constants */
var options = {
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: true,
  weekday: 'short',
};

/* Component */
const Nav: FC<NavProps> = ({ classNames }) => {
  var date = new Date();
  //@ts-ignore - weekday is a falsely identified as incompatible
  var formattedDate = date.toLocaleString('en-US', options);
  formattedDate = formattedDate.replace(/,/g, '');
  return (
    <div
      className={clsx(
        'flex h-[50px] w-full items-center justify-between bg-white/40 p-3 backdrop-blur-lg',
        classNames,
      )}
    >
      <div className="flex items-center space-x-3">
        <div className="overflow-hidden rounded-full">
          <Image height={30} width={30} src={ProfilePic} alt="Profile Pic" />
        </div>
        <h1 className="font-medium">Josh Galbreath</h1>
      </div>
      {/* Date */}
      <div>{formattedDate}</div>
    </div>
  );
};

export default Nav;
