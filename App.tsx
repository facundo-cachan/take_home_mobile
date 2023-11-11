/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import {
  Button,
  Text,
  useColorScheme,
  View
} from 'react-native'
import 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import {
  Colors
} from 'react-native/Libraries/NewAppScreen'
import CommitScreen from './src/screens/commits'

const Stack = createNativeStackNavigator()

function HomeScreen({ navigation }) {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <View style={{
      flex: 1, alignItems: 'center', padding: 20,
      justifyContent: 'center', backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
    }}>
      <Text style={{ color: 'green', fontSize: 33 }}>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('CommitScreen')}
      />
    </View>
  )
}

function App({ navigation }): JSX.Element {

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" options={{ title: 'Home' }} component={HomeScreen} />
          <Stack.Screen name="CommitScreen" options={{ title: 'CommitScreen' }} component={CommitScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App
