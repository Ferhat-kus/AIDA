import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'

export default class ChildAge extends Component {
    state = {
        Age: 0,
    };
    onPressPlus = () => {
        this.setState({ 
            Age: ++this.state.Age,
        })
    }
    onPressNegative = () => {
        if (this.state.Age > 0) {
            this.setState({ 
                Age: --this.state.Age,
            })
        }
    }
    render() {
        return (
            <View style={styles.Container}>
                <View style={styles.Negative}>
                    <TouchableOpacity onPress={this.onPressNegative}>
                        <Image source={require('../../../assets/ChildAgeIcon/Negative.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.AgeContainer}>
                    <Text style={styles.Age}>{this.state.Age}</Text>
                </View>
                <View style={styles.Plus}>
                    <TouchableOpacity onPress={this.onPressPlus}>
                        <Image source={require('../../../assets/ChildAgeIcon/Plus.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        width: '90%',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
    },
    Negative:{
        width:'25%',
        justifyContent:'space-around',
        alignItems:'center',
    },
    AgeContainer:{
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        width:'37%',
        height:160,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:2,
        borderRadius:10,
        borderColor:'white',
    },
    Age:{
        fontSize:60,
        color:'white',
    },
    Plus:{
        width:'25%',
        justifyContent:'space-around',
        alignItems:'center',
    },

})