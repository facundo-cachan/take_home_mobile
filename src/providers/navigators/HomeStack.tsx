/**
 * Home Stack Navigator
 *
 * @format
 */

import CommitScreen from '@screens/commits';
import UserScreen from '@screens/user';
import { Group, Screen } from './';
import { groupOptions, screenOptions } from './header-screen';

const screens = [
  {
    component: CommitScreen,
    name: 'CommitScreen'
  },
  {
    component: UserScreen,
    name: 'UserScreen'
  }
]
const HomeStack = () => (
  <Group navigationKey="HomeStack" screenOptions={groupOptions}>
    {screens.map((props) => (
      <Screen key={props.name} options={screenOptions} {...props} />
    ))}
  </Group>
)

export default HomeStack
