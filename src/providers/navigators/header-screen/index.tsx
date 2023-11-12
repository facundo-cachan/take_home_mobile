import rootHeaderLeft from './left';
import rootHeaderRight from './right';

export const iconSize: number = 20
const groupOptions = () => {

  return {
    headerRight: rootHeaderRight,
    headerTitle: () => (<></>),
    headerStyle: {
      backgroundColor: 'orange',
    },
  }
}
const screenOptions = () => {

  return {
    headerLeft: rootHeaderLeft,
  }
}

export { groupOptions, screenOptions };
