import React from 'react'
import { SafeAreaView,StyleSheet, Text, View } from 'react-native'

import { mainColors } from '../../../styles/mainstyles'

const addevent = () => {
  const {bigText, container} = styles
  return (
    <SafeAreaView style={ container }>
      <View>
        <Text style={ bigText }>Add new event</Text>
      </View>
    </SafeAreaView>
  )
}

export default addevent

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