import { KeyboardAwareScrollView } from '@pietile-native-kit/keyboard-aware-scrollview';
import { useRouter } from 'expo-router'
import React, {useState} from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

import AppButton from '../../components/AppButton'
import AppInput from '../../components/AppInput'
import LoadingScreen from '../../components/LoadingScreen';
import { useAuth } from '../../context/auth';
import { onHandleSignup } from '../../components/handlesign';
import { mainColors } from '../../styles/mainstyles'
const Register = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {setUser} = useAuth()
  const {bigText, container, inputcontainer, buttoncontainer, logocontainer} = styles
  const [loading, setLoading] = useState(false)

  return (
    <>
      {loading? <LoadingScreen /> : (
        <SafeAreaView style={ container }>
          <View style={ logocontainer }>
            <Text style={ bigText }>Register</Text>
          </View>
      
          <KeyboardAwareScrollView contentContainerStyle={ {justifyContent: 'flex-end', flex: 1} } keyboardDismissMode='on-drag' scrollEnabled={ false }>
            <View style={ inputcontainer }>
              <AppInput
                bcolor={ mainColors.MAIN_COLOR } bwidth={ 2 } fsize={ 16 }
                icolor={ mainColors.BACKGROUND_COLOR } iheight={ 50 } ionchange={ setEmail }
                ivalue={ email } iwidth={ 270 }
                text="Email" type="email"
              />
              <AppInput
                bcolor={ mainColors.MAIN_COLOR } bwidth={ 2 } fsize={ 16 }
                icolor={ mainColors.BACKGROUND_COLOR } iheight={ 50 } ionchange={ setPassword }
                ivalue={ password } iwidth={ 270 }
                secure text="Password"
              />
          
            </View>
          </KeyboardAwareScrollView>
          <View style={ buttoncontainer }>
            <AppButton
              bcolor={ mainColors.MAIN_COLOR } bheight={ 50 } bwidth={ 270 }
              fcolor={ mainColors.WHITETEXT_COLOR } fsize={ 18 } icon="adduser"
              onpress={ () =>  onHandleSignup(email,password, setUser, setLoading) } text="Register"
            />
            <AppButton
              bcolor={ mainColors.BACKGROUND_COLOR } bheight={ 50 } fcolor={ mainColors.MAIN_COLOR }
              fsize={ 18 } onpress={ () => router.back() } text="Have an account?"
              width={ 270 }
            />
          </View>
        </SafeAreaView>
      )}
    </>
  )
}

export default Register

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
    paddingTop: 50,
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