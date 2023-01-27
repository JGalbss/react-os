import {
  BookIcon,
  DownloadIcon,
  MailIcon,
  MusicIcon,
  NightIcon,
  ProfileIcon,
  RocketIcon,
  XIcon,
} from './icons';

/* Props */
export type IconProps = {
  height: number;
  width: number;
  className?: string;
};

/* Component */
const Icon = () => {};

Icon.Profile = ProfileIcon;
Icon.Music = MusicIcon;
Icon.X = XIcon;
Icon.Night = NightIcon;
Icon.Mail = MailIcon;
Icon.Book = BookIcon;
Icon.Download = DownloadIcon;
Icon.Rocket = RocketIcon;

export default Icon;
