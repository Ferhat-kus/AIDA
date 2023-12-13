import {
    Text,
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
} from 'react-native'
import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        const {onPress} = this.props;
        return (
            <View style={styles.Container}>
                <View style={styles.AIDA}>
                    <Image source={require('../../assets/Navbar/AIDA.png')} />
                </View>
                <TouchableOpacity onPress={onPress}>
                    <View style={styles.purchasingtokens}>
                        <View style={styles.tokensContainer}>
                            <View style={styles.PlusIcon}>
                                <Image source={require('../../assets/Navbar/PlusIcon.png')} />
                            </View>
                            <Text style={styles.Tokens}>100 dk.</Text>
                            <View style={styles.Icon}>
                                <Image source={require('../../assets/Navbar/Icon.png')} />
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        paddingTop:100,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    tokensContainer: {
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 20,
        backgroundColor: '#ffba52',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    Tokens: {
        paddingHorizontal: 15,
        fontSize: 16,
        color: 'white',
    },
    PlusIcon: {
        position: 'absolute',
        left: -10,
    },
    Icon: {
        position: 'absolute',
        right: -17,
    },
})