import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { render } from '@testing-library/react-native'
import { ErrorBoundary } from 'react-error-boundary'
import renderer from 'react-test-renderer'
import { RecoilRoot } from 'recoil'

import { ThemeProvider } from '@providers/theme/theme-provider'
import { RecoilObserver } from './RecoilObserver'

import type { RecoilObserverProps } from './RecoilObserver'

type Props = {
  component: any
  name?: string
}
type RecoilRenderProps = RecoilObserverProps & {
  children: JSX.Element
}

const logError = (error: Error, info: { componentStack: string }) => {
  // Do something with the error, e.g. log to an external API
  console.log(error, info)
}
const Stack = createNativeStackNavigator()
const withThemeProvider = (component: Props['component']) => (
  // @ts-ignore
  <ErrorBoundary FallbackComponent="Something went wrong" onError={logError}>
    <RecoilRoot>
      <ThemeProvider>
        {component}
      </ThemeProvider>
    </RecoilRoot>
  </ErrorBoundary>
)
const toJSON = (
  component: Props['component'],
) => {
  renderer.create(component).toJSON()
  return render(component)
}
const App = ({ component, name }: Props) => (
  <RecoilRoot>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
        }}>
        <Stack.Screen
          component={component}
          name={name}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </RecoilRoot>
)
const renderNavigator = (props: Props) =>
  render(
    // @ts-ignore
    <ErrorBoundary FallbackComponent="Something went wrong" onError={logError}>
      <App {...props} />
    </ErrorBoundary>,
  )
const Recoil = ({ children, ...rest }: RecoilRenderProps) => render(
  <RecoilRoot>
    <RecoilObserver {...rest} />
    {children}
  </RecoilRoot>,
)

export * from '@testing-library/react-native'
export { App, Recoil, renderNavigator as render, toJSON, withThemeProvider }

