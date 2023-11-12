import React from 'react'
import { StyleSheet,TextInput} from 'react-native'

import { mainColors } from '../styles/mainstyles'

const AppInput = (props) => {
  const {text, icolor, iwidth, iheight, ionchange, ivalue, fsize, bwidth, bcolor, secure=false, type} = props
  return (
    <TextInput 
      autoCapitalize='none' 
      keyboardType={ type=='email'  ? 'email-address' : 'default' } 
      onChangeText={ ionchange }  
      placeholder={ text }
      secureTextEntry={ secure }
      spellCheck={ false }
      style={ [{width:iwidth, 
        height: iheight, 
        backgroundColor: icolor, 
        fontSize:fsize, 
        borderWidth: bwidth, 
        borderColor: bcolor
      }, styles.input,
      ivalue === '' ? {backgroundColor: mainColors.BACKGROUND_COLOR} : null
    ] }
      value={ ivalue }
    />
  )
}

export default AppInput

const styles = StyleSheet.create({
  input: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    paddingHorizontal: 12,
    marginBottom: 10,
  },
})