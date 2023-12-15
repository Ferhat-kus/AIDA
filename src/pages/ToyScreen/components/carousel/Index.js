import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Data from './data/data';

export default class Index extends Component {
  carouselRef = React.createRef();

  state = {
    activeSlide: 0,
  };

  handleNextPress = () => {
    if (this.carouselRef.current) {
      this.carouselRef.current.snapToNext();
    }
  };

  handlePrevPress = () => {
    if (this.carouselRef.current) {
      this.carouselRef.current.snapToPrev();
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Carousel
          ref={this.carouselRef}
          containerCustomStyle={{ overflow: 'visible' }}
          data={Data}
          renderItem={({ item }) => (
            <View
              style={{
                width: 250,
                height: 350,
                alignItems: 'center',
                justifyContent:'center',
              }}>
              {item.toys && <Image style={{width:250,height:330,}} source={item.toys} />}
              {item.toysAdd && (
                <TouchableOpacity>
                  <Image  source={item.toysAdd} />
                </TouchableOpacity>
              )}
            </View>
          )}
          onSnapToItem={(index) => this.setState({ activeSlide: index })}
          firstItem={1}
          loop={false}
          inactiveSlideScale={0.75}
          inactiveSlideOpacity={0.75}
          sliderWidth={400}
          itemWidth={260}
          slideStyle={{ display: 'flex', alignItems: 'center' }}
        />
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Text style={{
            fontSize:30,
            fontFamily:'Roboto-Bold',
          }}>AIDA</Text>
          <Text style={{fontSize:15,fontFamily:'Roboto-Regular',}}>Merhaba ben Aida, size nasıl yardımcı olabilirim?</Text>
        </View>
        <View style={styles.DotsContainer}>
          <TouchableOpacity onPress={this.handlePrevPress}>
            <Image source={require('../../../../assets/ToyImage/previous.png')} />
          </TouchableOpacity>
          <Pagination
            dotsLength={Data.length - 1}
            activeDotIndex={this.state.activeSlide}
            containerStyle={{ paddingVertical: 8 }}
            dotStyle={{
              width: 15,
              height: 15,
              borderRadius: 15,
              marginHorizontal: 8,
              backgroundColor: 'grey',
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />
          <TouchableOpacity onPress={this.handleNextPress}>
            <Image source={require('../../../../assets/ToyImage/next.png')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    paddingVertical: 2,
  },
  DotsContainer: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
