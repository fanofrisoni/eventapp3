import React, {useEffect} from 'react'
import { Button,StyleSheet, Text, View } from 'react-native'

import EventItemList from '../../../components/EventItemList'
import { mainColors } from '../../../styles/mainstyles'

const HomeScreen = () => {
  

  const {container} = styles
  
  return (
    <View style={ container }>
      <EventItemList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: mainColors.BACKGROUND_COLOR
  }
})

export default HomeScreen