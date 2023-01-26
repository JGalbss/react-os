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

export type IconProps = {
  height: number;
  width: number;
};

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
