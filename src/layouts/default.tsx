/**
 * Screen Template
 *
 * @screen
 */

import { ActivityIndicator, View } from 'react-native'

const ScreenTemplate = ({ children, loading = true }: any): JSX.Element => loading ?
  (<ActivityIndicator />) : (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {children}
    </View>
  )

export default ScreenTemplate
