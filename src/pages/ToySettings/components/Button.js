import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class Button extends Component {
  render() {
    const { Title,onPress} = this.props;

    return (
      <TouchableOpacity onPress={onPress} style={styles.Container}>
        <Text style={styles.Title}>{Title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    width: '90%',
    paddingVertical:15,
    backgroundColor: '#CF7144',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'white',
    elevation: 1,
  },
  Title: {
    fontSize: 20,
    color: 'white',
  },
});
