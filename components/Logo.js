import React from 'react'
import { Image,StyleSheet, View } from 'react-native'

import { mainStyles } from '../styles/mainstyles'

const Logo = (props) => {
  const {logosize} = props
  return (
    <View style={ mainStyles.containercentered }>
      <Image
        source={ require('../assets/adaptive-icon.png') } style={ [
          logosize == 'small' ? styles.small 
        : logosize == 'medium' ? styles.medium 
        : logosize == 'large' ? styles.large 
        : null, styles.logo] }
      />
    </View>
  )
}

export default Logo

const styles = StyleSheet.create({
  small: {
    width: 35,
    height: 35,
  },
  medium: {
    width: 115,
    height: 115,
  },
  large: {
    width: 250,
    height: 250,
  },
  logo: {
    resizeMode: 'contain'
  }
})