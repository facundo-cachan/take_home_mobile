import { useNavigation, useRoute } from '@react-navigation/native';
import { View } from 'react-native';

import { ButtonWithoutFeedback } from '@components';
import { iconSize } from '.';
import styles from './styles';

const rootHeaderLeft = (): JSX.Element => {
  const { navigate, goBack } = useNavigation()
  const { name } = useRoute()

  const go = () => name === 'CommitScreen' ? navigate('UserScreen') : goBack()

  return (
    <View className={styles.left}>
      <ButtonWithoutFeedback icon="chevron-left" iconSize={iconSize} onPress={go} />
    </View>
  )
}

export default rootHeaderLeft;

