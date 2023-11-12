/**
 * https://reactnative.dev/docs/linking.html
 */

import { Linking } from 'react-native';

const openURL = (url: string) => Linking.openURL(url)

export default openURL
