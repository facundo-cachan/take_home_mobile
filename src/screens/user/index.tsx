/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from 'react';
import { Button, Text } from 'react-native';

import UserAPI from '../../hooks/userAPI';
import ScreenTemplate from '../../layouts/default';

import type { FC } from 'react';
import type { NavigatorProps } from '../../../App';

const UserScreen: FC<NavigatorProps> = ({ navigation }: NavigatorProps) => {
  const user = 'facundo-cachan'
  const [isLoading, setLoader] = useState<boolean>(true)
  const [info, setInfo] = useState()

  useEffect(() => {

    UserAPI.getInfo(user)
      .then((data) => setInfo(data))
      .finally(() => setLoader(!isLoading))

  }, [])

  return (
    <ScreenTemplate loading={isLoading}>
      <Button title="Go to Commits" onPress={() => navigation.navigate('CommitScreen')} />
      <Text>{JSON.stringify(info, null, 2)}</Text>
    </ScreenTemplate>
  );
};

export default UserScreen;
