import { Text, View } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome'

import openURL from "@hooks/openURL"
import useOrientation from "@hooks/useOrientation"
import styles from "./styles"

import { type FC } from 'react'
import type CommitProps from "./row-props"

const Row: FC<CommitProps> = ({ repo, owner, commit: {
  commit: { message, author, verification: { verified } }, sha } }) => {
  const { isLandscape } = useOrientation()

  return (
    <View className={styles.container}>
      <Text className={styles.author}>{author.date} - {author.name}</Text>
      <Text className={styles.commit} onPress={
        () => openURL(`https://github.com/${owner}/${repo}/commit/${sha}`)}>
        {message}</Text>
      <View className="flex justify-center py-2 border-solid border-b-2">
        <Text className={styles.sha}>{
          isLandscape ? sha : sha.slice(0, 5)
        } {verified && <Icon name="check-circle" size={isLandscape ? 20 : 16} />}</Text>
      </View>
    </View>
  )
}

export default Row
