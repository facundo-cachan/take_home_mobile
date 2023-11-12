/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from 'react';

import UserAPI from '../../hooks/userAPI';
import ScreenTemplate from '../../layouts/default';
import VCard from './components/molecules/vcard';

import type { FC } from 'react';
import type { NavigatorProps } from '../../../App';
import type UserProps from './types';

const UserScreen: FC<NavigatorProps> = ({ navigation }: NavigatorProps) => {
  const user = 'facundo-cachan'
  const [isLoading, setLoader] = useState<boolean>(true)
  const [info, setInfo] = useState<UserProps | undefined>()

  useEffect(() => {
    UserAPI.getInfo(user)
      .then(({ data }: { data: UserProps }) => setInfo(data))
      .finally(() => setLoader(!isLoading))
  }, [])

  return (
    <ScreenTemplate loading={isLoading}>
      {info && <VCard {...info} />}
    </ScreenTemplate>
  );
};

export default UserScreen
