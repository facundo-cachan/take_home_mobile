import { atom } from 'recoil';

import type { Theme } from '@react-navigation/native';

export const switchThemeAtom = atom<Theme['dark']>({
  key: 'switchTheme',
  default: false
});

export const themeAtom = atom({
  key: 'theme',
  default: 'light' // Puedes establecer 'dark' como predeterminado si prefieres
})
