import { Text, StyleSheet, View ,Image} from 'react-native'
import React, { Component } from 'react'
import axios from 'axios';


export default class UserProfile extends Component {
    state = {
        name: '',
        surname: '',
      };
    
      componentDidMount() {
        axios
          .get('https://randomuser.me/api/')
          .then((response) => response.data.results[0])
          .then((user) => {
            this.setState({
              name: user.name.first,
              surname: user.name.last,
            });
          })
      }
    
  render() {
    const { name, surname, } = this.state;

    return (
        <View style={styles.user}>
        <View style={styles.userImg}>
          <Image source={require('../../../assets/UserImg/userımg.png')} />
        </View>
        <View style={styles.userName}>
          <Text style={styles.firstName}>{name}</Text>
          <Text style={styles.lastName}>{surname}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    user: {
        width: '100%',
        flexDirection: 'row',
    },
    userImg: {
        width: '20%',
    },
    userName: {
        width: '80%',
        justifyContent: 'center',
    },
    firstName: {
        fontSize: 20,
        fontFamily: 'Lato-Regular',
        color: '#999999',
    },
    lastName: {
        fontSize: 26,
        fontFamily: 'Lato-Bold',
        color: '#999999',
    },
})