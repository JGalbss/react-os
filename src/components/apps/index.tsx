import Profile from './profile';

export type App = {
  app: React.FC<AppComponentProps>;
  window: React.FC<AppComponentProps>;
  name: string;
};

export type AppComponentProps = {
  classNames?: string;
};

const APPS: App[] = [Profile];

export default APPS;
