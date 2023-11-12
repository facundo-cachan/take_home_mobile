import { DarkTheme, DefaultTheme } from '@react-navigation/native'
import { createContext, useContext, useEffect, useState } from 'react'
import { Appearance } from 'react-native'
import { useRecoilState } from 'recoil'

import { switchThemeAtom } from '@providers/state-management/recoil/theme'
import type { Theme } from '@react-navigation/native'
import type {
  ThemeDataProps,
  ThemeProviderProps,
} from './theme-provider-props'

const ThemeProviderContext = createContext<ThemeDataProps | undefined>(undefined)

export function useThemeProvider(): ThemeDataProps {
  const context = useContext(ThemeProviderContext)
  if (!context) {
    throw new Error('useThemeProvider must be used within a ThemeProvider')
  }
  return context
}

export function ThemeProvider({ children }: ThemeProviderProps): JSX.Element {
  const colorScheme = Appearance.getColorScheme()
  const [theme, setColors] = useState<Theme>(DefaultTheme)

  const [isDark, setSwitchTheme] = useRecoilState<Theme['dark']>(switchThemeAtom);

  useEffect(() => {
    setColors((isDark && colorScheme) ? DarkTheme : DefaultTheme)
  }, [isDark, colorScheme])

  const toggleSwitch: () => void = () => {
    setSwitchTheme((prev: Theme['dark']) => !prev)
  }

  const contextValue: ThemeDataProps = {
    isDark, toggleSwitch, theme
  }

  return (
    <ThemeProviderContext.Provider value={contextValue}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
