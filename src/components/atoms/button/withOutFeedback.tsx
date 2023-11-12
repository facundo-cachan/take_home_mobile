import { TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import type { FC } from 'react';
import type { TextStyle } from 'react-native';

type Props = {
  color?: string
  icon: string
  iconSize?: number
  style?: TextStyle
  onPress: () => void
}
const WithoutFeedback: FC<Props> = ({ color, style, icon, iconSize, onPress }): JSX.Element => (
  <TouchableWithoutFeedback onPress={onPress}>
    <Icon name={icon} size={iconSize ?? 20} style={style} color={color}/>
  </TouchableWithoutFeedback>
)

export default WithoutFeedback;

