import { Image, Text, View } from 'react-native';

import useOrientation from "@hooks/useOrientation";

import type UserProps from '@screens/user/types';
import vcardStyles from './vcard-styles';

const VCard = ({ avatar_url, name, location, bio, followers, following }: Partial<UserProps>) => {
  const { isLandscape } = useOrientation()
  const s = isLandscape ? 190 : 100
  const styles = isLandscape ? vcardStyles.landscape : vcardStyles.portrait

  return (
    <View className={styles.container}>
      <View>
        <Image
          /* source={{ uri: avatar_url }} */
          source={
            isLandscape ? require('@assets/img/190.jpeg') : require('@assets/img/100.jpeg')
          }
          alt={name}
          width={s}
          height={s}
          className="rounded-full"
        />
      </View>
      <View className={styles.info}>
        <Text className={styles.name}>{name}</Text>
        <Text className={styles.location}>{location}</Text>
        <Text className={styles.location}>Followers {followers} - Following {following}</Text>
        <Text className={styles.bio}>{bio}</Text>
      </View>
    </View>
  )
}

export default VCard
