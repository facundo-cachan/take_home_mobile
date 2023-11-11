/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from 'react';
import { Text } from 'react-native';

import ScreenTemplate from '../../layouts/default';

import type { FC } from 'react';

const CommitScreen: FC = () => {
  const owner = 'facundo-cachan'
  const repo = 'challenge-simple_solutions'
  const [isLoading, setLoader] = useState<boolean>(true)
  const [commits, setCommits] = useState()

  useEffect(() => {
    /*
    CommitAPI.getAll({ owner, repo })
      .then((data) => setCommits(data))
      .finally(() => setLoader(!isLoading))
      */
  }, [])

  return (
    <ScreenTemplate loading={isLoading}>
      <Text>Commits</Text>
    </ScreenTemplate>
  );
};

export default CommitScreen;
