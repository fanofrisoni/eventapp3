import { Stack } from 'expo-router'
import React from 'react'


export const unstable_settings = {
  initialRouteName: 'loginscreen',
};

const Layout = () => {

  return (
    <Stack screenOptions={ {
      headerShown: false,
    } }
    >
      <Stack.Screen
        name='loginscreen' options={ {
        headerShown: false,
      } }
      />
      <Stack.Screen
        name='registerscreen' options={ {
        headerShown: false,
        
        gestureEnabled: true,
      } }
      />
      <Stack.Screen
        name='forgotscreen' options={ {
        headerShown: false,
        gestureEnabled: true,
      } }
      />
    </Stack>
  )
}

export default Layout