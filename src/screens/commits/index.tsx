/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from 'react';
import { Text } from 'react-native';

import { List } from '../../components';
import CommitAPI from '../../hooks/commitAPI';
import ScreenTemplate from '../../layouts/default';
import { Row } from './components/molecules';

import type { FC } from 'react';
import type { NavigatorProps } from '../../../App';
import type CommitsProps from './types';

const owner = 'facundo-cachan'
const repo = 'challenge-simple_solutions'
const CommitScreen: FC<NavigatorProps> = () => {
  const [isLoading, setLoader] = useState<boolean>(true)
  const [commits, setCommits] = useState<CommitsProps[]>([])

  useEffect(() => {
    CommitAPI.getAll({ owner, repo })
      .then(({ data }: { data: CommitsProps[] }) => setCommits(data))
      .finally(() => setLoader(!isLoading))
  }, [])

  return (
    <ScreenTemplate loading={isLoading}>
      {commits.length === 0 && <Text className="text-center text-lg">No commits found</Text>}
      <List
        data={commits}
        renderItem={({ item }: { item: any }) => (
          <Row key={item.sha} commit={item} repo={repo} owner={owner} />
        )
        }
      />
    </ScreenTemplate>
  );
};

export default CommitScreen;
