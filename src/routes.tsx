import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from './pages/Home';
import {Passwords} from './pages/Passwords';

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="passwords" component={Passwords} />
    </Tab.Navigator>
  );
}
