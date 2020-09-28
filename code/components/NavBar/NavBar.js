import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import MainScreen from "../../screens/MainScreen/MainScreen";
import DetailedScreen from "../../screens/DetailedScreen/DetailedScreen";

const Tab = createMaterialTopTabNavigator();

function NavBar() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MainScreen} />
      <Tab.Screen name="Settings" component={DetailedScreen} />
    </Tab.Navigator>
  );
}

export default NavBar;