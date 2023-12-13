import React, { Component } from 'react';
import { View,Image, Text, StyleSheet, TouchableOpacity, Modal, TouchableWithoutFeedback, ImageBackground } from 'react-native';

class DropdownExample extends Component {
    state = {
        isModalVisible: false,
        selectedValue: null,
    };

    toggleModal = () => {
        this.setState((prevState) => ({ isModalVisible: !prevState.isModalVisible }));
    };

    handleSelfSelect = (value) => {
        this.setState({ selectedValue: value });
        this.toggleModal();
    };

    render() {
        const { isModalVisible, selectedValue } = this.state;
        const selfOptions = ['Manifestör', 'Jeneratör', 'Projectör'];

        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.toggleModal} style={styles.dropdownButton}>
                <View style={{marginHorizontal:10,}}>
                    <Image source={require('../../../assets/InputIcon/X.png')}/>
                </View>
                    <Text style={[styles.SelfText,{marginHorizontal:10,}]}>{selectedValue || 'Özbenlik Seçin'}</Text>
                </TouchableOpacity>

                <Modal
                    transparent={true}
                    visible={isModalVisible}
                    animationType="slide"
                    onRequestClose={this.toggleModal}
                >
                    <TouchableWithoutFeedback onPress={this.toggleModal}>
                        <View style={styles.modalOverlay} />
                    </TouchableWithoutFeedback>
                    <ImageBackground source={require('../../../assets/background.png')} style={styles.modalContent}>
                        {selfOptions.map((self, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => this.handleSelfSelect(self)}
                                style={styles.optionItem}
                            >
                                <Text style={styles.ozbenlik}>{self}</Text>
                            </TouchableOpacity>
                        ))}
                    </ImageBackground>
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    SelfText: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Asap-Regular',
    },
    dropdownButton: {
        flexDirection:'row',
        borderWidth: 1,
        borderColor: 'white',
        width: '100%',
        padding: 20,
        borderRadius: 20,
        backgroundColor: 'rgba(249,156,52,0.53)',
        alignItems: 'center',
    },
    modalOverlay: {
        flex: 1,
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom:0,
        height:300,
    },
    optionItem: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
    },
    ozbenlik: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Asap-Regular',
    },
});

export default DropdownExample;
