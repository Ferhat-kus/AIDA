import React, { Component } from 'react';
import { Text, StyleSheet, View, ImageBackground, ScrollView } from 'react-native';
//COMPONENETS
import Navbar from '../../components/Navbar/Index';
import UserProfile from './components/UserProfile';
import ChosenLanguage from './components/ChosenLanguage/Index';
import Button from '../../components/Button'

export default class Index extends Component {
    render() {
        const { navigation } = this.props;

        return (
            <ImageBackground style={styles.container} source={require('../../assets/background.png')}>
                <View style={styles.navbarContainer}>
                    <Navbar />
                </View>
                <Text style={styles.title}>Profil</Text>
                <View style={styles.whiteBackground}>
                    <Text style={styles.whitePageTitleText}>Ayarlar</Text>
                    <UserProfile />
                    <View style={styles.ChooseLanguage}>
                        <ChosenLanguage onPress={() => navigation.goBack()} />
                    </View>
                    <Button Title='Kaydet'/>
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
    whitePageTitleText: {
        paddingVertical: 20,
        fontSize: 30,
        fontFamily: 'Lato-Bold',
    },
    whiteBackground: {
        flex: 5,
        width: '100%',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: 'white',
        paddingHorizontal: 20,
    },
    ChooseLanguage: {
        width: '100%',
        paddingVertical: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },

});
