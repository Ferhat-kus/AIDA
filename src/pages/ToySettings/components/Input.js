import React, { Component } from 'react';
import { View, Image, TextInput, StyleSheet, } from 'react-native';


class Index extends Component {
    render() {
        const { placeholder } = this.props
        return (
            <View style={styles.container}>
                <View style={styles.InputBody}>
                    <Image style={styles.Icon} source={require('../../../assets/InputIcon/profilecircle.png')} />
                    <TextInput
                        style={styles.Input}
                        placeholder={placeholder}
                        placeholderTextColor="#908f9b"
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 24,
    },
    InputBody: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        width: '80%',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 20,
        flexDirection: 'row',
        color: '#FFF',
        paddingVertical: 10,
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    Input: {
        paddingHorizontal: 15,
        letterSpacing: 2,
        fontSize: 18,
        color: '#FFF',
        width: '100%',
    },
    Icon: {
        alignItems: 'center',
        justifyContent: 'center',
        tintColor: '#FFF',
        width: 30,
        height: 30,
    },
});

export default Index;
