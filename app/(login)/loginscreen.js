import { KeyboardAwareScrollView } from '@pietile-native-kit/keyboard-aware-scrollview'
import { useRouter } from 'expo-router'
import React, {useState} from 'react'
import { SafeAreaView,StyleSheet, Text, View } from 'react-native'

import AppButton from '../../components/AppButton'
import AppInput from '../../components/AppInput'
import FacebookLogService from '../../components/FacebookLogService'
import GoogleLogService from '../../components/GoogleLogService'
import LoadingScreen from '../../components/LoadingScreen'
import { useAuth } from '../../context/auth'
import { onHandleSignIn } from '../../components/handlesign'
import { mainColors,mainStyles } from '../../styles/mainstyles'
const Login = () => {
  const {setUser} = useAuth()
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const {
    slogan,
    logocontainer,
    logservicescontainer,
    inputcontainer,
    buttoncontainer
  } = styles
  return (
    <>
      {loading ? <LoadingScreen /> : (

    
        <SafeAreaView style={ mainStyles.container }>
          <View style={ logocontainer }>
            <Text style={ mainStyles.logob }>b</Text>
            <Text style={ slogan }>where u wanna b</Text>
          </View>

          <View style={ inputcontainer }>
            <KeyboardAwareScrollView
              keyboardDismissMode="on-drag"
              scrollEnabled={ false }
            >
              <View style={ logservicescontainer }>
                <FacebookLogService color={ mainColors.MAIN_COLOR } size={ 52 } />
                <GoogleLogService color={ mainColors.MAIN_COLOR } size={ 52 } />
              </View>
              <AppInput
                bcolor={ mainColors.MAIN_COLOR }
                bwidth={ 2 }
                fsize={ 14 }
                icolor={ mainColors.BACKGROUND_COLOR }
                iheight={ 50 }
                ionchange={ setEmail }
                ivalue={ email }
                iwidth={ 260 }
                text="Email"
                type="email"
              />
              <AppInput
                bcolor={ mainColors.MAIN_COLOR }
                bwidth={ 2 }
                fsize={ 14 }
                icolor={ mainColors.BACKGROUND_COLOR }
                iheight={ 50 }
                ionchange={ setPassword }
                ivalue={ password }
                iwidth={ 260 }
                secure
                text="Password"
              />
              <AppButton
                bcolor={ mainColors.BACKGROUND_COLOR }
                bheight={ 25 }
                bwidth={ 250 }
                fcolor={ mainColors.SECONDARY_COLOR }
                fsize={ 12 }
                onpress={ () => router.push('/forgotscreen') }
                text="forgot password?"
              />
            </KeyboardAwareScrollView>
          </View>

          <View style={ buttoncontainer }>
            <AppButton
              bcolor={ mainColors.MAIN_COLOR }
              bheight={ 50 }
              bwidth={ 260 }
              fcolor={ mainColors.WHITETEXT_COLOR }
              fsize={ 18 }
              icon="login"
              onpress={ () => onHandleSignIn(email,password, setUser, setLoading) } //
              text="Log In"
            />
            <AppButton
              bcolor={ mainColors.BACKGROUND_COLOR }
              bheight={ 50 }
              fcolor={ mainColors.MAIN_COLOR }
              fsize={ 18 }
              onpress={ () => router.push('/registerscreen') }
              text="Register"
              width={ 260 }
            />
          </View>
        </SafeAreaView>
      )}
    </>
  )
}

export default Login

const styles = StyleSheet.create({
  slogan: {
    fontSize: 28,
    fontWeight: '300',
    color: mainColors.SECONDARY_COLOR,
    textAlign: 'center',
    shadowRadius: 0,
    shadowColor: mainColors.MAIN_COLOR,
    shadowOffset: {
      width: 0,
      height: 18
    },
    shadowOpacity: 1
  },
  logocontainer: {
    marginTop: 60,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flex: 1
  },
  logservicescontainer: {
    flexDirection: 'row',
    gap: 70,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 120,
    marginBottom: 20
  },
  inputcontainer: {
    flex: 2
  },
  buttoncontainer: {
    flex: 1,
    marginTop: 20
  }
})
