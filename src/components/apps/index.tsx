import { AppNames } from '../common/dock';
import Chrome from './chrome';
import Profile from './profile';

export type App = {
  app: React.FC<AppComponentProps>;
  window: React.FC<AppComponentProps>;
  name: AppNames;
};

export type AppComponentProps = {
  classNames?: string;
};

const APPS: App[] = [Profile as App, Chrome as App];

export default APPS;
