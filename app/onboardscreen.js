import AsyncStorage from '@react-native-async-storage/async-storage'
import { useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import AppButton from '../components/AppButton'
import { mainColors, mainStyles } from '../styles/mainstyles'

const onboardscreen = () => {
  const router = useRouter()

  
  const startButton = () => {
    router.replace('/homescreen')
    AsyncStorage.setItem('onboarded', 'true')
  }


  return (
    <View style={ mainStyles.container }>
      <Text>onboardscreen</Text>
      <AppButton
        bcolor={ mainColors.BACKGROUND_COLOR } bheight={ 25 } bwidth={ 250 }
        fcolor={ mainColors.SECONDARY_COLOR } fsize={ 10 } onpress={ startButton }
        text={ 'Get started' }
      />
    </View>
  )
}

export default onboardscreen

const styles = StyleSheet.create({})