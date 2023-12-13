import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class PackageIncluded extends Component {
  render() {
    const {Title , price} = this.props;
    return (
        <View style={{paddingVertical:5,}}>
        <View style={{flexDirection:'row',}}>
            <Text style={styles.Title}>{Title}</Text>
            <Text style={styles.price}>{price}</Text>
        </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
    Title: {
        fontSize:20,
        fontFamily:'Roboto-Bold',
    },
    price:{
        opacity:0.5,
        fontSize:20,
        fontFamily:'Roboto-Regular',
    },
})