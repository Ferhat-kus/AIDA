import { Text, StyleSheet, View,TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    const {Title,onPress} = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={styles.Container}>
        <Text style={styles.Title}>{Title}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
    Container:{
        width:'100%',
        backgroundColor:'#F99C34',
        alignItems:'center',
        justifyContent: 'center',
        paddingVertical:10,
        borderWidth:1,
        borderColor:'white',
        borderRadius:50,
        elevation:10,
    },
    Title:{
        fontSize:25,
        fontFamily:'Roboto-Bold',
        color:'white',
    },
})