import { View, StatusBar } from 'react-native'
import React, { Component } from 'react'
//PAGES
import Navigation from './src/router/Navigation';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, }}>
        <StatusBar hidden />
        <Navigation />
      </View>
    )
  }
}

