import rootHeaderLeft from './left';
import rootHeaderRight from './right';

export const iconSize: number = 20
const screenOptions = ({ navigation: { navigate }, route: { name } }) => {
  console.log('Screen name', name);

  return {
    headerLeft: rootHeaderLeft,
    headerRight: rootHeaderRight,
    headerTitle: () => (<></>),
    headerStyle: {
      backgroundColor: 'green',
      // justifyContent: 'space-between'
    },
  }
}

export { screenOptions };
