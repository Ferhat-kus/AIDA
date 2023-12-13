import { StyleSheet, StatusBar } from 'react-native'
import React, { Component } from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer }
  from '@react-navigation/native';
import { createNativeStackNavigator }
  from '@react-navigation/native-stack';
//PAGES
import ToySettings from '../pages/ToySettings/Index';
//NAVİGATİON
import BottomTabs from './BottomTabs';

export default class Index extends Component {
  render() {
    const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <StatusBar hidden />
        <Stack.Navigator initialRouteName='ToySettings'>

        <Stack.Screen
            name="BottomTabs"
            options={{ headerShown: false }}
            component={BottomTabs}
          />
          <Stack.Screen
            name="ToySettings"
            options={{ headerShown: false }}
            component={ToySettings}
          />
          {/* <Stack.Screen
            name="ShopPage"
            options={{ headerShown: false }}
            component={ShopPage}
          />
          <Stack.Screen
            name="ToyScreen"
            options={{ headerShown: false }}
            component={ToyScreen}
          />
          <Stack.Screen
            name="UserLangues"
            options={{ headerShown: false }}
            component={UserLangues}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({})