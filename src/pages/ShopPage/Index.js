import React, { Component } from 'react';
import { Text, StyleSheet, View, ImageBackground, } from 'react-native';
//COMPONENETS
import Navbar from '../../components/Navbar/Index';
import Carousel from './components/carousel/Index';
import PackageIncluded from './components/PackageIncluded'
import Button from '../../components/Button';

export default class Index extends Component {
    render() {
        const { navigation } = this.props
        return (
            <ImageBackground style={styles.container} source={require('../../assets/background.png')}>
                <View style={styles.navbarContainer}>
                    <Navbar onPress={ ()=> navigation.navigate('ToySettings')}/>
                </View>
                <Text style={styles.title}>Market</Text>
                <View style={styles.whiteBackground}>
                    <View style={styles.carousel}>
                        <Carousel />
                        <View style={{ width: '100%', backgroundColor: 'gray', height: 1, }} />
                        <View style={{ marginVertical: 30, }}>
                            <PackageIncluded Title='Token Paket:' price=' 50 Token' />
                            <PackageIncluded Title='Paket Fiyatı:' price=' 12' />
                        </View>
                        <Button onPress={() => navigation.navigate('ToySettings')} Title='Satın Al'/>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    navbarContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        marginVertical: 20,
        fontSize: 30,
        color: 'white',
        fontFamily: 'Roboto-Bold',
    },
    whiteBackground: {
        flex: 2.7,
        width: '100%',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: 'white',
        paddingHorizontal: 20,
    },
});
