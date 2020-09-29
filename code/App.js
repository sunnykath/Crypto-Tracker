import React, { useEffect, useState } from 'react';
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import DetailedScreen from './screens/DetailedScreen/DetailedScreen';
import MainScreen from './screens/MainScreen/MainScreen';


export default function App() {

const SwitchNavigator = createSwitchNavigator({
  main: MainScreen,
  details: DetailedScreen
})

const AppContainer = createAppContainer(SwitchNavigator);

  return (
    <AppContainer/>
  )

}