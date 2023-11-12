import { Entypo } from '@expo/vector-icons'; 
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

import { mainColors } from '../styles/mainstyles';

const FacebookLogService = ({size=62, color=mainColors.MAIN_COLOR}) => {
  return (
    <TouchableOpacity onPress={ () => {console.log("DO FACEBOOK SHI")} }>
      <Entypo color={ color } name="facebook-with-circle" size={ size } />
    </TouchableOpacity>
  )
}

export default FacebookLogService

const styles = StyleSheet.create({})