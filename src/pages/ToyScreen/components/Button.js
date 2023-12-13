import { Text, StyleSheet, View,TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.Container}>
        <Text style={styles.Title}>Oyuncak Ayarları</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
    Container:{
        paddingVertical:3,
        paddingHorizontal:30,
        borderRadius:50,
        borderWidth:3,
        borderColor:'#F99C34',
    },
    Title:{
        fontSize:18,
        color:'#F99C34',

    },
})