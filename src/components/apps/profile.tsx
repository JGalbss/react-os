import { FC } from 'react';
import { atom, useRecoilState } from 'recoil';
import App from '@/components/common/dock/app';
import type { AppComponentProps } from '.';
import Icon from '../common/icons';
import Window from '../common/window';
import ProfilePage from '../windows/profile';

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
      isClosed={isClosed}
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
    >
      <ProfilePage />
    </Window>
  );
};

const Profile = {
  app: ProfileApp,
  window: ProfileWindow,
  name: 'Profile',
};

export default Profile;
