// Hook to detect screen orientation

import { useEffect, useState } from 'react'
import { Dimensions } from 'react-native'

type OrientationProps = {
  window: {
    width: number
    height: number
  }
}

const Orientation = () => {
  const [orientation, setOrientation] = useState('portrait');
  const isLandscape = orientation === 'landscape'
  const callback = ({ window: { width, height } }: OrientationProps) =>
    width < height ? setOrientation('portrait') : setOrientation('landscape');
  useEffect(() => {
    Dimensions.addEventListener('change', callback)
  }, [])

  return {orientation,isLandscape}
}

export default Orientation
