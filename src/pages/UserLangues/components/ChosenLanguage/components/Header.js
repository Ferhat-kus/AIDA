import { Text, StyleSheet, View,Image ,TouchableOpacity} from 'react-native'
import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    const {onPress} = this.props
    return (
      <View style={styles.Container}>
        <View style={styles.HeaderContainer}>
            <TouchableOpacity onPress={onPress}>
                <Image source={require('../../../../../assets/HeaderIcon/gobackIcon/goBack.png')}/>
            </TouchableOpacity>
            <View style={styles.HeaderTitle}>
                <Image source={require('../../../../../assets/HeaderIcon/translate.png')}/>
                <Text style={styles.Title}>Dil seçeneği</Text>
            </View>
            <View/>
        </View>
        <View style={{width:'100%',height:2,backgroundColor:'#F99C34',}}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    Container:{
        width:'90%',
        height:50,
        marginBottom:25,
      },
    HeaderContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical:15,
    },
    HeaderTitle:{
        flexDirection:'row',
    },
    Title:{
        fontSize:15,
        fontFamily:'Lato-Regular',
        color:'black',
        paddingHorizontal:10,
    },
})