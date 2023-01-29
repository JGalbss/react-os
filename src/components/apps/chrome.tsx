import { FC } from 'react';
import { atom, useRecoilState } from 'recoil';
import App from '@/components/common/dock/app';
import type { AppComponentProps } from '.';
import { AppNames } from '../common/dock';
import Icon from '../common/icons';
import Window from '../common/window';

/* Constants */
const colorClassnames = 'bg-red-500 hover:bg-red-600';
const name = 'Chrome';

/* States */
const isChromeClosed = atom({
  key: 'chromeClosedState', // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

const isChromeExpanded = atom({
  key: 'chromeExpandedState', // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

/* Component */

const ChromeApp: FC<AppComponentProps> = () => {
  const [isClosed, setIsClosed] = useRecoilState(isChromeClosed);

  return (
    <App
      icon={<Icon.Profile width={40} height={40} />}
      colorClassnames={colorClassnames}
      name={name as AppNames}
      onClick={() => setIsClosed(false)}
      isClosed={isClosed}
    />
  );
};

const ChromeWindow: FC<AppComponentProps> = ({ classNames }) => {
  const [isClosed, setIsClosed] = useRecoilState(isChromeClosed);
  const [isExpanded, setIsExpanded] = useRecoilState(isChromeExpanded);
  return (
    <Window
      isClosed={isClosed}
      setIsClosed={setIsClosed}
      setIsExpanded={setIsExpanded}
      isExpanded={isExpanded}
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
