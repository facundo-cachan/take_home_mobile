/**
 * Screen Template
 *
 * @screen
 */

import { ActivityIndicator, View } from 'react-native'

const ScreenTemplate = ({ children, loading = true }: any): JSX.Element => (
  <View className={`flex${loading && '-1'} content-center justify-center${loading && ' p-3'}`}>
    {loading ? <ActivityIndicator size="large" /> : children}
  </View>
)


export default ScreenTemplate
