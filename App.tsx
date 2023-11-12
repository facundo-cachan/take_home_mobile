import { SafeAreaProvider } from 'react-native-safe-area-context'
import { RecoilRoot } from 'recoil'

import RootNavigator from '@providers/navigators'
import { ThemeProvider } from '@providers/theme/theme-provider'

import 'react-native-gesture-handler'

export type NavigatorProps = {
  navigation: { navigate: any }
  route: any
}
function App(): JSX.Element {

  return (
    <SafeAreaProvider>
      <RecoilRoot>
        <ThemeProvider>
          <RootNavigator />
        </ThemeProvider>
      </RecoilRoot>
    </SafeAreaProvider>
  )
}

export default App
