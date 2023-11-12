import { AntDesign } from '@expo/vector-icons'; 
import React from 'react'
import { StyleSheet, Text, TouchableOpacity,View } from 'react-native'
const AppButton = (props) => {
  const {text, bcolor, bwidth, bheight, fsize, fcolor, icon, onpress} = props
  return (
    <TouchableOpacity onPress={ onpress } style={ [{width:bwidth, height: bheight, backgroundColor: bcolor}, styles.button] }>
      {text && <Text style={ [{fontSize: fsize, color:fcolor}, styles.text] }>{text}</Text>}
      {icon &&<AntDesign color={ fcolor } name={ icon } size={ fsize + 6 }/>}
    </TouchableOpacity>
  )
}

export default AppButton

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    flexDirection: 'row',
    gap: 20,
    marginBottom: 5,
  },
  text: {
    textAlign: 'center',
    fontWeight: '400',
  }
})