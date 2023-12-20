import React, { Component } from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity, Image } from 'react-native';
import Data from './data/data';

export default class Flatlist extends Component {
   state = {
            selectedIndex: 0,
        };

    renderContentItem = ({ item, index }) => {
        const isSelected = this.state.selectedIndex === index;
        return (
            <TouchableOpacity
                style={[styles.borderContainer, { opacity: isSelected ? 1 : 0.5 }]}
                onPress={() => this.setState({ selectedIndex: index })}>
                <View style={styles.sliderContainer}>
                    <Image source={item.token} />
                    <View style={styles.nameborder}>
                        <Text style={styles.name}>{item.name}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };
    render() {
        return (
            <View style={styles.Container}>
                <FlatList
                    horizontal       
                    renderItem={this.renderContentItem}
                    data={Data}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        width: '100%',
        alignItems: 'center',
        marginVertical: 50,
    },
    borderContainer: {
        width: 141,
        height: 177,
        marginHorizontal: 5,
        borderRadius: 20,
        borderWidth: 5,
        borderColor: '#CF7144',
    },
    sliderContainer: {
        paddingVertical: 20,
        alignItems: 'center',
    },
    nameborder: {
        marginTop: 15,
        width: 110,
        height: 35,
        backgroundColor: '#FFBA52',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    name: {
        fontSize: 18,
        color: 'white',
    },
});
