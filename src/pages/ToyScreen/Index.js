import React, { Component } from 'react';
import { Text, StyleSheet, View, ImageBackground, } from 'react-native';
//COMPONENETS
import Navbar from '../../components/Navbar/Index';
import Carousel from './components/carousel/Index';
import PackageIncluded from '../ShopPage/components/PackageIncluded';
import Button from './components/Button'

export default class Index extends Component {
    render() {
        const {navigation} = this.props;
        return (
            <ImageBackground style={styles.container} source={require('../../assets/background.png')}>
                <View style={styles.navbarContainer}>
                    <Navbar onPress={() => navigation.navigate('UserLangues')}/>
                </View>
                <View style={styles.carousel}>
                <Carousel/>       
                </View>
                <View style={styles.whiteBackground}>
                <View style={{width:'100%',height:1,backgroundColor:'grey',marginTop:40,}}/>
                <PackageIncluded Title='Çocuk Adı:' price=' Hayati ali KELEŞ'/>
                <PackageIncluded Title='Yaş:' price=' 11'/>
                <View style={{alignItems:'center',justifyContent:'center',}}>
                    <Button/>
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
        justifyContent: 'center',
    },
    navbarContainer: {
        flex: 1,
        alignItems: 'center',
    },
    whiteBackground: {
        flex: 1,
        width: '100%',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        justifyContent:'center',
    },
    carousel:{
        zIndex:1,
        top:160,
        position:'absolute',
        width:'100%',
        height:'50%',
        opacity:0.5,
        flex: 1,
        backgroundColor: '#f0f0f0',
        backgroundColor:'yellow',
        alignItems:'center', 
    },
});
