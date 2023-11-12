import React from 'react'
import { ActivityIndicator, StyleSheet,  Text,View } from 'react-native'

import { mainColors, mainStyles } from '../styles/mainstyles'
import Logo from './Logo'

const LoadingScreen = () => {
  return (
    <View style={ mainStyles.container }>
      <Logo logosize={ 'large' }/>
      <ActivityIndicator color={ mainColors.MAIN_COLOR } size={ 'large' }/>
    </View>
  )
}

export default LoadingScreen

const styles = StyleSheet.create({})