import React, { Component } from 'react'
import { Dimensions, Text, View, Image,StyleSheet, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Data from './data/data'

const width = Dimensions.get('window').width;

export default class Index extends Component {
  render() {
    return (
      <View style={{ flex: 1,}}>
      <Carousel
        loop={false}
        width={width-50}
        height={width / 1.1}
        mode="parallax"
        autoPlay={false}
        data={Data}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => console.log('current index:', index)}
        renderItem={({ item, index }) => (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
            {item.toys && <Image style={{width:400,height:500,}} source={item.toys} />}
            {item.toysAdd && (
              <TouchableOpacity>
                <Image source={item.toysAdd} />
              </TouchableOpacity>
            )}           
          </View>   
        )}/>
            <View style={{justifyContent:'center',alignItems:'center',}}>
              <Text style={{fontSize:30,fontFamily:'Roboto-Bold',}}>AIDA</Text>
              <Text style={{fontSize:15,fontFamily:'Roboto-Regular',}}>Merhaba ben Aida, size nasıl yardımcı olabilirim?</Text>
            </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({})