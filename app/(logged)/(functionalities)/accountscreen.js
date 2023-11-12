
import React from 'react'
import { Button,SafeAreaView , StyleSheet, Text, View} from 'react-native'

import { useAuth } from '../../../context/auth'
import { mainColors,mainStyles } from '../../../styles/mainstyles'
const Account = () => {
  const {signOut} = useAuth()
  const {bigText, container} = styles

  return (

    <SafeAreaView style={ container }>
      <View>
        <Text style={ bigText }>Profile</Text>
      </View>
      <View>
        <Button
          onPress={ () => {
          signOut()
        } } title='Log out'
        />
      </View>
    </SafeAreaView>
  )
}

export default Account

const styles = StyleSheet.create({
  bigText: {
    fontSize: 38,
    fontWeight: '300',
    color: mainColors.MAIN_COLOR,
    textAlign: 'left',
    marginLeft: 30,
    marginTop: 10,
  },
  container: {
    flex: 1, 
    backgroundColor: mainColors.BACKGROUND_COLOR,
  }
})