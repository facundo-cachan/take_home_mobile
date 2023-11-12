import { useTheme } from '@react-navigation/native';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { ButtonWithoutFeedback } from '@components';
import openURL from "@hooks/openURL";
import { iconSize } from '.';

import styles from './styles';

const rootHeaderRight = () => {
  const { dark } = useTheme()

  const changeTheme = () => {
    console.log('changeTheme');
    
  }
  const whatsapp = () => {
    openURL(
      `https://wa.me/${process.env.WHATSAPP}?text=Hola soy usuario de Go Party y quisiera consultar...`
    )
  }

  return (
    <View className={styles.right}>
      <Icon name="whatsapp" size={iconSize} color="black" onPress={whatsapp} />
      <ButtonWithoutFeedback style={{ marginHorizontal: iconSize + (iconSize / 2) }} icon={dark ? 'moon-o' : 'sun-o'} iconSize={iconSize} onPress={changeTheme} />
    </View>
  )
}

export default rootHeaderRight
