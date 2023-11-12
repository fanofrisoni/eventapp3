import { AntDesign } from '@expo/vector-icons'; 
import Moment from 'moment'
import React, { useState } from 'react'
import { Dimensions,StyleSheet,  Text,  View } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import FlipCard from 'react-native-flip-card'

import { mainColors, mainStyles } from '../styles/mainstyles'
import AppButton from './AppButton'
const windowHeight = Dimensions.get('window').height;

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Party',
    date: '2023/11/21 15:23',
    source: require('../assets/sample.jpg')
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Club super',
    date: '2023/12/15 17:47',
    source: require('../assets/sample2.jpg')
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Reading boys',
    date: '2023/11/02 11:13',
    source: require('../assets/sample2.jpg')
  },
];

const EventItemList = () => {

  const [isSwappedAll, setIsSwappedAll] = useState(false);

  const swipedAll = () => {
    setIsSwappedAll(true)
  }
  const noSwipedAll = () => {
    setIsSwappedAll(false)
  }
  const { eventItemContainerFront, eventItemContainerBack, cardTitle, cardDate, cardType, image, cardAnswer } = styles

  const renderItem = (card) => {
    return (
      <FlipCard
        clickable
        flipHorizontal
        flipVertical={ false }
        friction={ 10 }
        perspective={ 1200 }
      >
        <View style={ eventItemContainerFront }>
          <Text style={ cardTitle }>{card.title}</Text>
          <Text style={ cardDate }>{Moment(card.date, 'YYYY/MM/DD hh:mm').format('dddd MMM Do LT')}</Text>
        </View>
        <View style={ eventItemContainerBack }>
          <Text style={ cardTitle }>Back</Text>
          <Text style={ cardDate }>Bac</Text>
        </View>
      </FlipCard>
    )
  }

  return (
    <>
      {!isSwappedAll ? (
        <Swiper
          animateCardOpacity
          backgroundColor={ mainColors.BACKGROUND_COLOR }
          cardHorizontalMargin={ 0 }
          cardIndex={ 0 }
          cardVerticalMargin={ 10 }
          cards={ DATA }
          infinite={ false }
          keyExtractor={ card => card.id }
          marginBottom={ 50 }
          marginTop={ 10 }
          onSwiped={ (cardIndex) => {console.log(cardIndex)} }
          onSwipedAll={ swipedAll }
          overlayLabels={ {
        left: {
          element: <AntDesign color={ mainColors.WHITETEXT_COLOR } name="dislike2" size={ 78 } />,
          title: 'no',
            style: {
              wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'center',
                marginLeft: -30
              }
            }
          },
        right: {
          element: <AntDesign color={ mainColors.WHITETEXT_COLOR } name="like2" size={ 78 } />,
          title: 'yes',
            style: {
              wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',
                marginLeft: 30
              }
            }
          },
      } }
          overlayOpacityHorizontalThreshold={ windowHeight / 18 }
          renderCard={ renderItem }
          showSecondCard
          stackAnimationFriction={ 12 }
          stackAnimationTension={ 78 }
          stackScale={ 70 }
          stackSeparation={ 75 } 
          stackSize={ 2 }
          verticalSwipe={ false }
        />
    ): 
    (
      <View style={ mainStyles.containermiddle }>
        <Text style={ {fontSize: 22, textAlign: 'center', color: mainColors.MAIN_COLOR, paddingHorizontal: 40, fontWeight: '300'} }>
          There's no more events! Come back later.
        </Text>
        <AppButton 
          bcolor={ mainColors.SECONDARY_COLOR }
          bheight={ 55 }
          bwidth={ 240 } 
          fcolor={ mainColors.WHITETEXT_COLOR } 
          fsize={ 16 } 
          icon={ 'reload1' } 
          onpress={ noSwipedAll } 
          text={ 'Changed your mind?' }
        />
      </View>
    )}
      
    </>
  )

}

const styles = StyleSheet.create({
  eventItemContainerFront: {
    backgroundColor: mainColors.INACTIVE_COLOR,
    width: "90%",
    height: windowHeight - 205,
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  eventItemContainerBack: {
    backgroundColor: mainColors.BLACKTEXT_COLOR,
    width: "90%",
    height: windowHeight - 205,
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  cardTitle: {
    color: mainColors.WHITETEXT_COLOR,
    alignSelf: 'flex-start',
    paddingLeft: 30,
    marginTop: 20,
    fontSize: 42,
    fontWeight: '400',

  },
  cardDate: {
    color: mainColors.WHITETEXT_COLOR,
    paddingLeft: 30,
    alignSelf: 'flex-start',
    marginTop: 20,
    fontSize: 16,
  },
  cardType: {
    color: mainColors.WHITETEXT_COLOR
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  cardAnswer: {
    color: mainColors.WHITETEXT_COLOR,
    marginTop: 10,
    fontSize: 42,
    fontWeight: '400',
  }
})


export default EventItemList