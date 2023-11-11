/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import CommitScreen from './src/screens/commits'
import UserScreen from './src/screens/user'

const Stack = createNativeStackNavigator()

type RootStackParamList = {
  Home: undefined;
  CommitScreen: undefined;
}
export type NavigatorProps = {
  navigation: {navigate: any};
  route: any;
}
function App(): JSX.Element {

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="CommitScreen" options={{ title: 'Commits' }} component={CommitScreen} />
          <Stack.Screen name="UserScreen" options={{ title: 'User' }} component={UserScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App
