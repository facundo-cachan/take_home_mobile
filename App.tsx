import { SafeAreaProvider } from 'react-native-safe-area-context';

import RootNavigator from './src/providers/navigators';

import 'react-native-gesture-handler';

export type NavigatorProps = {
  navigation: {navigate: any};
  route: any;
}
function App(): JSX.Element {

  return (
    <SafeAreaProvider>
      <RootNavigator />
    </SafeAreaProvider>
  )
}

export default App
