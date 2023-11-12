import { View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import { ButtonWithoutFeedback } from '@components'
import openURL from "@hooks/openURL"
import { iconSize } from '.'

import { useThemeProvider } from '@providers/theme/theme-provider'
import styles from './styles'

const rootHeaderRight = () => {
  const { isDark,
    theme: { colors: { text } }, toggleSwitch } = useThemeProvider()

  const whatsapp = () => {
    openURL(
      `https://wa.me/${process.env.WHATSAPP}?text=Hola soy usuario de Go Party y quisiera consultar...`
    )
  }

  return (
    <View className={styles.right}>
      <Icon name="whatsapp" size={iconSize} color={text} onPress={whatsapp} />
      <ButtonWithoutFeedback style={
        { marginHorizontal: iconSize + (iconSize / 2), color: text }}
        icon={isDark ? 'moon-o' : 'sun-o'} iconSize={iconSize} onPress={toggleSwitch} />
    </View>
  )
}

export default rootHeaderRight
