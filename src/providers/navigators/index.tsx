import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Fragment } from 'react'

import HomeStack from './HomeStack'

export const { Navigator, Screen, Group } = createNativeStackNavigator()

const RootNavigator = (): JSX.Element => {
  const theme = DefaultTheme

  const onReady = () => {
    console.log('RootNavigator is ready');

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
