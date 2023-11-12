import { KeyboardAwareScrollView } from '@pietile-native-kit/keyboard-aware-scrollview';
import React from 'react'
import { StyleSheet, View } from 'react-native'

import AppButton from '../components/AppButton'
import AppInput from '../components/AppInput'
import FacebookLogService from '../components/FacebookLogService'
import GoogleLogService from '../components/GoogleLogService'
import { mainColors, mainStyles } from '../styles/mainstyles'

const testscreen = () => {
  
  return (
    <KeyboardAwareScrollView contentContainerStyle={ mainStyles.container }>
      <View style={ {flexDirection: 'row', gap: 50, alignContent: 'center', justifyContent: 'center', alignItems: 'center'} }>
        <FacebookLogService />
        <GoogleLogService />
      </View>
      <AppInput
        bcolor={ mainColors.MAIN_COLOR } bwidth={ 4 } fsize={ 16 }
        icolor={ mainColors.BACKGROUND_COLOR } iheight={ 50 } iwidth={ 250 }
        text={ 'Email' } type={ 'email' }
      />
      <AppInput
        bcolor={ mainColors.MAIN_COLOR } bwidth={ 4 } fsize={ 16 }
        icolor={ mainColors.BACKGROUND_COLOR } iheight={ 50 } iwidth={ 250 }
        secure text={ 'Password' }
      />
      <AppButton
        bcolor={ mainColors.MAIN_COLOR } bheight={ 50 } bwidth={ 250 }
        fcolor={ mainColors.WHITETEXT_COLOR } fsize={ 18 } icon={ 'login' }
        text={ 'Log in' }
      />
      <AppButton
        bcolor={ mainColors.BACKGROUND_COLOR } bheight={ 50 } bwidth={ 250 }
        fcolor={ mainColors.MAIN_COLOR } fsize={ 18 } icon={ 'adduser' }
        text={ 'Register' }
      />
      <AppButton
        bcolor={ mainColors.BACKGROUND_COLOR } bheight={ 25 } bwidth={ 250 }
        fcolor={ mainColors.MAIN_COLOR } fsize={ 12 } text={ 'Forgot password?' }
      />

    </KeyboardAwareScrollView>
  )
}

export default testscreen

const styles = StyleSheet.create({
  
})