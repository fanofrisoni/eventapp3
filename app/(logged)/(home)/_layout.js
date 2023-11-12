import Ionicons from '@expo/vector-icons/Ionicons';
import { Redirect,Stack,Tabs, useRouter } from 'expo-router'
import React, {useState} from 'react'
import { Platform,Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {mainColors, mainStyles} from '../../../styles/mainstyles'

const Layout = () => {
  const router = useRouter()
  const [onboarded, setOnboarded] = useState(true);

  if (!onboarded) {return <Redirect href="/onboardscreen" />}

  return (
    <Tabs >
      <Tabs.Screen
        name='homescreen' options={ {
        tabBarLabel: 'Home',
        tabBarIcon: ({ focused }) => (
          <Ionicons color={ focused ? mainColors.MAIN_COLOR : mainColors.INACTIVE_COLOR } name='home-sharp' size={ 24 } />
        ),
        tabBarActiveTintColor: mainColors.MAIN_COLOR,
        tabBarInactiveTintColor: mainColors.INACTIVE_COLOR,
        headerTitle: () => (
          <Text style={ [mainStyles.logo, Platform.OS == 'android' ? {paddingLeft: 118} : null] }>b</Text>
        ),
        headerRight: () => (
          <TouchableOpacity onPress={ () => router.push('/(functionalities)/addevent') }>
            <Ionicons
              color={ mainColors.MAIN_COLOR } name="ios-add-circle" size={ 36 }
              style={ {marginRight: 24} }
            />
          </TouchableOpacity>
  
        ),
        headerLeft: () => (
          <TouchableOpacity onPress={ ()=> router.push('/(functionalities)/accountscreen') }>
            <Ionicons
              color={ mainColors.MAIN_COLOR } name="person-circle" size={ 36 }
              style={ {marginLeft: 24} }
            />
          </TouchableOpacity>
        ),
      } }
      />
      <Tabs.Screen
        name='upcomingscreen' options={ {
        tabBarLabel: 'Upcoming',
        tabBarIcon: ({ focused }) => (
          <Ionicons color={ focused ? mainColors.MAIN_COLOR : mainColors.INACTIVE_COLOR } name='heart' size={ 24 } />
        ),
        tabBarActiveTintColor: mainColors.MAIN_COLOR,
        tabBarInactiveTintColor: mainColors.INACTIVE_COLOR,
        headerShown: true,
        headerTitle:"What's next?",
        headerTitleStyle: {
          fontSize: 16,
          fontWeight: '500',
          color: mainColors.SECONDARY_COLOR,
          textAlign: 'center',
        }
      } }
      />
    </Tabs>
  )
}

export default Layout