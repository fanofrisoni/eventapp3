import { KeyboardAwareScrollView } from '@pietile-native-kit/keyboard-aware-scrollview';
import { useRouter } from 'expo-router'
import React, {useState} from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

import AppButton from '../../components/AppButton'
import AppInput from '../../components/AppInput'
import { mainColors,mainStyles } from '../../styles/mainstyles'
const Forgot = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const {bigText, container, inputcontainer, buttoncontainer, logocontainer} = styles
  return (
    <SafeAreaView style={ container }>
      <View style={ logocontainer }>
        <Text style={ bigText }>Forgot password?</Text>
      </View>
      <View style={ inputcontainer }>
        <AppInput
          bcolor={ mainColors.MAIN_COLOR } bwidth={ 2 } fsize={ 16 }
          icolor={ mainColors.BACKGROUND_COLOR } iheight={ 50 } ionchange={ setEmail }
          ivalue={ email } iwidth={ 270 }
          text={ 'Email' } type={ 'email' }
        />
      </View>
      <View style={ buttoncontainer }>
        <AppButton
          bcolor={ mainColors.MAIN_COLOR } bheight={ 50 } bwidth={ 270 }
          fcolor={ mainColors.WHITETEXT_COLOR } fsize={ 18 } icon={ 'reload1' }
          onpress={ () => {} } text={ 'Reset' }
        />
        <AppButton
          bcolor={ mainColors.BACKGROUND_COLOR } bheight={ 50 } fcolor={ mainColors.MAIN_COLOR }
          fsize={ 18 } onpress={ () => router.back() } text={ 'Go back' }
          width={ 270 }
        />
      </View>
    </SafeAreaView>
  )
}

export default Forgot

const styles = StyleSheet.create({
  bigText: {
    fontSize: 56,
    fontWeight: '200',
    color: mainColors.MAIN_COLOR,
    textAlign: 'left',
    marginLeft: 40,
    marginTop: 40,
    flexWrap: 'wrap',
    flex: 1,
  },
  container: {
    flex: 1, 
    backgroundColor: mainColors.BACKGROUND_COLOR,
  },
  inputcontainer: {
    marginTop: 90,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  buttoncontainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logocontainer: {
    flexDirection: 'row',
    flexShrink: 1,
  }
})