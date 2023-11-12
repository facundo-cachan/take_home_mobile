import { Text, TouchableWithoutFeedback, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import type { FC } from 'react'
import type { TextStyle } from 'react-native'

type Props = {
  color?: string
  text?: string
  icon?: string
  iconSize?: number
  style?: TextStyle
  onPress: () => void
}
const WithoutFeedback: FC<Props> = ({ color, text, style, icon, iconSize, onPress }): JSX.Element => (
  <TouchableWithoutFeedback onPress={onPress} accessibilityLabel={icon}>
    <View className="flex flex-row">
      {icon && <Icon name={icon} size={iconSize ?? 20} style={style} color={color} />}
      {text && (<Text style={style}>{text}</Text>)}
    </View>
  </TouchableWithoutFeedback>
)

export default WithoutFeedback
