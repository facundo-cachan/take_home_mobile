import { useThemeProvider } from '@providers/theme/theme-provider'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Fragment, useEffect } from 'react'

import HomeStack from './HomeStack'

export const { Navigator, Screen, Group } = createNativeStackNavigator()

const RootNavigator = (): JSX.Element => {
  const { theme } = useThemeProvider()

  useEffect(() => {
    console.log('RootNavigator theme changed')
  }, [theme.dark])

  const onReady = () => {
    console.log('RootNavigator is ready')
  }

  return (<NavigationContainer theme={theme} onReady={onReady}>
      <Navigator>
        {
          [HomeStack].map((Module, i: number) => (
            <Fragment key={i}>{Module()}</Fragment>
          ))
        }
      </Navigator>
    </NavigationContainer>)

}

export default RootNavigator
