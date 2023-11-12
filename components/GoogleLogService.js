import { Entypo } from '@expo/vector-icons'; 
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

import { mainColors } from '../styles/mainstyles';




const GoogleLogService = ({size=62, color=mainColors.MAIN_COLOR}) => {

  const signInGoogle = async () => {
    console.log('Signing in...')
  }

  return (
    <TouchableOpacity onPress={ signInGoogle }>
      <Entypo color={ color } name="google--with-circle" size={ size } />
    </TouchableOpacity>
  )
}

export default GoogleLogService

const styles = StyleSheet.create({})