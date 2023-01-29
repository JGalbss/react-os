import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BatteryIcon,
  BookIcon,
  ChromeIcon,
  DownloadIcon,
  ExpandIcon,
  LockIcon,
  MailIcon,
  MinusIcon,
  MusicIcon,
  NightIcon,
  ProfileIcon,
  RocketIcon,
  SearchIcon,
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

Icon.ArrowRight = ArrowRightIcon;
Icon.ArrowLeft = ArrowLeftIcon;
Icon.Chrome = ChromeIcon;
Icon.Lock = LockIcon;
Icon.Expand = ExpandIcon;
Icon.Search = SearchIcon;
Icon.Battery = BatteryIcon;
Icon.Profile = ProfileIcon;
Icon.Music = MusicIcon;
Icon.X = XIcon;
Icon.Night = NightIcon;
Icon.Mail = MailIcon;
Icon.Book = BookIcon;
Icon.Download = DownloadIcon;
Icon.Rocket = RocketIcon;
Icon.Minus = MinusIcon;

export default Icon;
