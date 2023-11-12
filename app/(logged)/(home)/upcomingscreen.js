import Moment from 'moment'
import React from 'react'
import { FlatList,SafeAreaView , StyleSheet, Text, View} from 'react-native'

import { mainColors,mainStyles } from '../../../styles/mainstyles'


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Party',
    date: '2023/11/21 15:23',
    source: require('../../../assets/sample.jpg')
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Club super',
    date: '2023/12/15 17:47',
    source: require('../../../assets/sample2.jpg')
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Reading boys',
    date: '2023/11/02 11:13',
    source: require('../../../assets/sample2.jpg')
  },
];

const Upcoming = () => {
  const { container} = styles

  const renderEvent = (item) => {
    return (
      <View style={ {padding: 12, marginHorizontal: 20, marginTop: 30, borderRadius: 25, backgroundColor: mainColors.MAIN_COLOR} }>
        <Text style={ {fontSize: 22, textAlign: 'center', color: mainColors.WHITETEXT_COLOR, paddingHorizontal: 40, fontWeight: '500', marginBottom: 10} }>
          {item.title}
        </Text>
        <Text style={ {fontSize: 14, textAlign: 'center', color: mainColors.WHITETEXT_COLOR, paddingHorizontal: 40, fontWeight: '300'} }>
          {Moment(item.date, 'YYYY/MM/DD hh:mm').format('dddd MMM Do LT')}
        </Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={ [container] }>
      <View style={ {flex: 1} }>
        <FlatList
          
          data={ DATA }
          keyExtractor={ (event) => event.id }
          renderItem={ ({item}) => renderEvent(item) }
        />
      </View>
      
    </SafeAreaView>
  )
}

export default Upcoming

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: mainColors.BACKGROUND_COLOR,
  }
})