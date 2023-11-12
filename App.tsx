/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import CommitScreen from './src/screens/commits'
import UserScreen from './src/screens/user'

const Stack = createNativeStackNavigator()

type RootStackParamList = {
  UserScreen: string
  CommitScreen: string
}
export type NavigatorProps = {
  navigation: {navigate: any};
  route: any;
}
function App(): JSX.Element {

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="UserScreen">
          <Stack.Screen name="CommitScreen" options={{ title: 'Commits' }} component={CommitScreen} />
          <Stack.Screen name="UserScreen" options={{ title: 'User' }} component={UserScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App
