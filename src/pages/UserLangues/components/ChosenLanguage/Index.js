import { Text, StyleSheet, View,  } from 'react-native'
import React, { Component } from 'react'
import Header from './components/Header'
import Carousel from './components/carousel/Index';
import Button from './components/Button'
export default class ChooseLanguage extends Component {
  render() {
    const { onPress } = this.props
    return (
      <View style={styles.Container}>
        <Header onPress={onPress} />
        <Carousel />
        <Button Title='Düzenle'/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    height: 300,
    borderWidth: 2.5,
    borderRadius: 20,
    alignItems: 'center',
  },
})