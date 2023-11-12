import type { Theme } from '@react-navigation/native'
import type { ReactNode } from "react"

export type ThemeDataProps = {
  isDark: Theme['dark']
  theme: Theme
  toggleSwitch: () => void
}
export type ThemeProviderProps = {
  children: ReactNode
}