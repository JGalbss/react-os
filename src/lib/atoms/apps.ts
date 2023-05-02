import { atom } from 'recoil';
import { AppNames } from '@/components/common/dock';

// Apps opened in the dock
export const openApps = atom({
  key: 'openApps', // unique ID (with respect to other atoms/selectors)
  default: [] as AppNames[], // default value (aka initial value)
});
