import { FC } from 'react';
import App from '@/components/common/dock/app';
import type { AppComponentProps } from '.';
import { AppNames } from '../common/dock';
import Icon from '../common/icons';
import Window from '../common/window';

/* Constants */
const colorClassnames = 'bg-white hover:bg-gray-300';
const name = 'Chrome';

/* Components */
const ChromeApp: FC<AppComponentProps> = () => {
  return (
    <App
      icon={<Icon.Chrome width={40} height={40} />}
      colorClassnames={colorClassnames}
      name={name as AppNames}
    />
  );
};

const ChromeWindow: FC<AppComponentProps> = ({ classNames, windowSelected, setWindowSelected }) => {
  return (
    <Window
      setWindowSelected={setWindowSelected}
      windowSelected={windowSelected}
      classNames={classNames}
      name={name}
    >
      <iframe
        title="Chrome Browser"
        src="https://www.google.com/webhp?igu=1"
        width="100%"
        height="100%"
      />
    </Window>
  );
};

const Chrome = {
  app: ChromeApp,
  window: ChromeWindow,
  name: 'Chrome',
};

export default Chrome;
