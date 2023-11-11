/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from 'react';
import { Button, Text } from 'react-native';

import CommitAPI from '../../hooks/commitAPI';
import ScreenTemplate from '../../layouts/default';

import type { FC } from 'react';
import type { NavigatorProps } from '../../../App';

const CommitScreen: FC<NavigatorProps> = ({ navigation }: NavigatorProps) => {
  const owner = 'facundo-cachan'
  const repo = 'challenge-simple_solutions'
  const [isLoading, setLoader] = useState<boolean>(true)
  const [commits, setCommits] = useState()

  useEffect(() => {

    CommitAPI.getAll({ owner, repo })
      .then((data) => setCommits(data))
      .finally(() => setLoader(!isLoading))

  }, [])

  return (
    <ScreenTemplate loading={isLoading}>
      <Button title="Go to User" onPress={() => navigation.navigate('UserScreen')} />
      <Text className="text-red-600">{JSON.stringify(commits, null, 2)}</Text>
    </ScreenTemplate>
  );
};

export default CommitScreen;
