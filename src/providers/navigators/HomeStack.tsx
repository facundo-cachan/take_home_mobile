
/**
 * Home Stack Navigator
 *
 * @format
 */

import { Group, Screen } from './';

import CommitScreen from '@screens/commits';
import UserScreen from '@screens/user';
import { screenOptions } from './header-screen';

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
  <Group navigationKey="HomeStack">
    {screens.map((props) => (
      <Screen key={props.name} {...props} options={screenOptions} />
    ))}
  </Group>
)

export default HomeStack
