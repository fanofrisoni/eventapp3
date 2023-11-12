import { Slot } from 'expo-router'
import * as ScreenOrientation from "expo-screen-orientation";
import React from 'react'

import { Provider } from '../context/auth';


const Layout = () => {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
  return (
    <Provider>
      <Slot/>
    </Provider>
  )
}

export default Layout