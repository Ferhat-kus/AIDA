import { Text, StyleSheet, View,TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    const {Title} = this.props;
    return (
      <TouchableOpacity style={styles.Container}>
        <Text style={styles.Text}>{Title}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
    Container:{
        width:'101%',
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:'#12101F',
        paddingVertical:5,
        borderWidth:2,
        borderBottomWidth:2,
        borderBottomColor: 'white',
        borderColor:'white',
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,
    },
    Text: {
        fontSize:20,
        fontFamily:'Roboto-Bold',
        color:'white',
    },
})