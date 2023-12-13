import React from 'react';
import { View,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ShopPage from '../pages/ShopPage/Index'
import ToyScreen from '../pages/ToyScreen/Index';
import UserLangues from '../pages/UserLangues/Index'

const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: 'absolute',
    bottom: 10,
    right: 20,
    left: 20,
    borderRadius: 30,
    elevation: 0,
    height: 60,
    backgroundColor: '#020252',
  },
};
export default function NavigationBar() {
  return (
      <Tab.Navigator 
      screenOptions={screenOptions}
      initialRouteName="ToyScreen">
        <Tab.Screen
          name="ShopPage"
          component={ShopPage}
          options={{
            tabBarIcon: ({ }) => (
              <Image source={require('../assets/BottomTabsIcon/Vector.png')} />
            ),
          }}/>
        <Tab.Screen
          name="ToyScreen"
          component={ToyScreen}
          options={{
            tabBarIcon: ({ }) => (
              <View style={{
                width: 95,
                height: 95,
                backgroundColor: '#020252',
                marginBottom: 60,
                borderWidth: 7,
                borderColor: 'white',
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Image source={require('../assets/BottomTabsIcon/AIDA.png')} />
              </View>
            ),
          }}/>
        <Tab.Screen
          name="UserLangues"
          component={UserLangues}
          options={{
            tabBarIcon: ({ }) => (
              <Image source={require('../assets/BottomTabsIcon/profilecircle.png')} />
            ),
          }}/>
      </Tab.Navigator>
  );
}

