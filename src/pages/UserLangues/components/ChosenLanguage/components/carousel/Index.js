import React, { Component } from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity, Animated } from 'react-native';
import Data from './data/data';

export default class Flatlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItemIndex: null,
            opacityValues: [],
            scaleValues: [],
        };

        for (let i = 0; i < Data.length; i++) {
            this.state.opacityValues.push(new Animated.Value(i === 0 ? 1 : 0.5));
            this.state.scaleValues.push(new Animated.Value(i === 0 ? 1.5 : 1));
        }

        this.flatListRef = React.createRef();
    }

    componentDidMount() {
        // İlk öğenin başlangıçta daha büyük görünmesi için basma işlemini tetikle
        this.handleItemPress(0);
    }

    handleItemPress = (index) => {
        // Basılan öğenin index değerini sakla
        this.setState({ selectedItemIndex: index }, () => {
            const animations = [];

            // Animasyonları başlat
            animations.push(
                Animated.timing(this.state.opacityValues[index], {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                })
            );

            animations.push(
                Animated.timing(this.state.scaleValues[index], {
                    toValue: 1.5,
                    duration: 500,
                    useNativeDriver: true,
                })
            );

            // Diğer öğeleri varsayılan değerlere sıfırla
            for (let i = 0; i < this.state.opacityValues.length; i++) {
                if (i !== index) {
                    animations.push(
                        Animated.timing(this.state.opacityValues[i], {
                            toValue: 0.5,
                            duration: 500,
                            useNativeDriver: true,
                        })
                    );

                    animations.push(
                        Animated.timing(this.state.scaleValues[i], {
                            toValue: 1,
                            duration: 500,
                            useNativeDriver: true,
                        })
                    );
                }
            }

            Animated.parallel(animations).start();

            // FlatList'in ortasına odaklan
            this.flatListRef.current.scrollToIndex({
                index: index,
                animated: true,
                viewPosition: 0.5, // 0.5, öğeyi FlatList'in ortasına getirir
            });
        });
    };

    renderContentItem = ({ item, index }) => {
        const animatedStyle = {
            opacity: this.state.opacityValues[index],
            transform: [{ scale: this.state.scaleValues[index] }],
        };

        return (
            <TouchableOpacity style={styles.TouchableContainer} onPress={() => this.handleItemPress(index)}>
                <Animated.View style={[styles.sliderContainer, animatedStyle]}>
                    <Text style={styles.language}>{item.langueage}</Text>
                </Animated.View>
            </TouchableOpacity>
        );
    };

    render() {
        return (
            <View style={styles.Container}>
                <FlatList
                    ref={this.flatListRef}
                    renderItem={this.renderContentItem}
                    data={Data}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    onEndReachedThreshold={0.1}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        width: '100%',
        alignItems: 'center',
        height: 180,
    },
    sliderContainer: {
        alignItems: 'center',
        width: '100%',
    },
    language: {
        marginVertical: 15,
        fontSize: 20,
        color: '#F99C34',
        fontFamily: 'Lato-Bold',
    },
    TouchableContainer: {
        width: 300,
    },
});
