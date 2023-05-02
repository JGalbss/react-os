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

/* Components */
const ProfileApp: FC<AppComponentProps> = () => {
  const [isClosed, setIsClosed] = useRecoilState(isProfileClosed);

  return (
    <App
      icon={<Icon.Profile width={40} height={40} />}
      colorClassnames={colorClassnames}
      name={name}
    />
  );
};

const ProfileWindow: FC<AppComponentProps> = ({
  classNames,
  windowSelected,
  setWindowSelected,
}) => {
  const [isClosed, setIsClosed] = useRecoilState(isProfileClosed);

  return (
    <Window
      classNames={classNames}
      name={name}
      windowSelected={windowSelected}
      setWindowSelected={setWindowSelected}
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
