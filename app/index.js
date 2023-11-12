import { Redirect,useRootNavigationState } from 'expo-router';
import React, { useState } from 'react'
import { ActivityIndicator } from 'react-native';

import { mainColors } from '../styles/mainstyles'


export default function App() {


  const rootNavigationState = useRootNavigationState();

  if (!rootNavigationState?.key) return <ActivityIndicator color={ mainColors.MAIN_COLOR } size={ 'large' } />;
  
  return <Redirect href={ '/homescreen' } />

  //return <Redirect href={'/testscreen'} />

}