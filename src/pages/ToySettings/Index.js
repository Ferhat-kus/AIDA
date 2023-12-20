import {
    Image,
    StyleSheet,
    View,
    ImageBackground,
    Text,
} from 'react-native'
import React, { Component } from 'react'
//COMPONENTS
import Button from './components/Button'
import Input from './components/Input';
import ChildAge from './components/ChildAge';
import Dropdown from './components/Dropdown';

export default class Index extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <ImageBackground style={styles.Container} source={require('../../assets/background.png')}>
                <View style={styles.AIDA}>
                    <Image source={require('../../assets/AIDA.png')} />
                </View>
                <View style={styles.InputContainer}>
                    <Input placeholder='Çocuğun Adı' />
                    <Input placeholder='Çocuğun Soyadı' />
                    <Dropdown />
                </View>
                <View style={styles.ChildAgeContainer}>
                    <Text style={{ color: 'white', padding: 10, fontSize: 15, }}>Yaş</Text>
                    <ChildAge />
                </View>
                <View style={styles.ButtonContainer}>
                    <Button
                        Title='Kaydet'
                        onPress={() => navigation.navigate('BottomTabs')}
                    />
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
    },
    AIDA: {
        flex: 0.2,
        justifyContent: 'center',
    },
    InputContainer: {
        flex: 0.35,
        justifyContent: 'flex-start',
    },
    ChildAgeContainer: {
        flex: 0.40,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ButtonContainer: {
        marginTop: 40,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },

})