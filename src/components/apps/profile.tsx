import { FC } from 'react';
import { atom, useRecoilState } from 'recoil';
import type { AppComponentProps } from '.';
import App from '../common/dock/app';
import Icon from '../common/icons';
import Window from '../common/window';

/* Constants */
const colorClassnames = 'bg-red-500 hover:bg-red-600';
const name = 'Profile';

/* States */
const isProfileClosed = atom({
  key: 'profileClosedState', // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

const isProfileExpanded = atom({
  key: 'profileExpandedState', // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

/* Component */

const ProfileApp: FC<AppComponentProps> = () => {
  const [isClosed, setIsClosed] = useRecoilState(isProfileClosed);

  return (
    <App
      icon={<Icon.Profile width={40} height={40} />}
      colorClassnames={colorClassnames}
      name={name}
      onClick={() => setIsClosed(false)}
    />
  );
};

const ProfileWindow: FC<AppComponentProps> = ({ classNames }) => {
  const [isClosed, setIsClosed] = useRecoilState(isProfileClosed);
  const [isExpanded, setIsExpanded] = useRecoilState(isProfileExpanded);
  return (
    <Window
      isClosed={isClosed}
      setIsClosed={setIsClosed}
      setIsExpanded={setIsExpanded}
      isExpanded={isExpanded}
      classNames={classNames}
    />
  );
};

const Profile = {
  app: ProfileApp,
  window: ProfileWindow,
  name: name,
};

export default Profile;
