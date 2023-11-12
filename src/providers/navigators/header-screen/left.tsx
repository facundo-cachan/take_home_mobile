import { useNavigation, useRoute } from '@react-navigation/native'
import { useEffect, useMemo } from 'react'
import { View } from 'react-native'

import { ButtonWithoutFeedback } from '@components'
import { useThemeProvider } from '@providers/theme/theme-provider'
import { iconSize } from '.'
import styles from './styles'

const rootHeaderLeft = (): JSX.Element => {
  const { name } = useRoute()
  const { navigate, goBack } = useNavigation()
  const { isDark,
    theme: { colors: { text } } } = useThemeProvider()

  useEffect(() => {
    console.log({ iconUser, icon })
  }, [isDark])

  const go = () => name === 'CommitScreen' ? navigate('UserScreen') : goBack()
  const iconUser = useMemo(() => isDark ? 'user' : 'user-circle-o', [isDark])
  const icon = useMemo(() => name === 'CommitScreen' ? iconUser : 'arrow-left', [name, iconUser])

  return (
    <View className={styles.left}>
      <ButtonWithoutFeedback icon={icon} iconSize={iconSize} onPress={go} color={text} />
    </View>
  )
}

export default rootHeaderLeft;

