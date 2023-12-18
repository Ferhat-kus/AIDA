import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Data from './data/data';

export default class Index extends Component {
  // Carousel bileşenine referans oluşturuluyor
  carouselRef = React.createRef();

  // Aktif slaydın indeksini tutan state
  state = {
    activeSlide: 1,
  };

  // Sonraki slayda geçişi sağlayan fonksiyon
  handleNextPress = () => {
    if (this.carouselRef.current) {
      this.carouselRef.current.snapToNext();
    }
  };

  // Önceki slayda geçişi sağlayan fonksiyon
  handlePrevPress = () => {
    if (this.carouselRef.current) {
      this.carouselRef.current.snapToPrev();
    }
  };

  render() {
    return (
      <View style={styles.container}>
        {/* Carousel Bileşeni */}
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
                justifyContent: 'center',
              }}>
              {/* Eğer "toys" varsa, görüntüyü göster */}
              {item.toys && <Image style={{ width: 250, height: 330 }} source={item.toys} />}
              {/* Eğer "toysAdd" varsa, dokunmatik opsiyonuyla göster */}
              {item.toysAdd && (
                <TouchableOpacity>
                  <Image source={item.toysAdd} />
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

        {/* Başlangıç Ekranı */}
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 30, fontFamily: 'Roboto-Bold' }}>AIDA</Text>
          <Text style={{ fontSize: 15, fontFamily: 'Roboto-Regular' }}>Merhaba ben Aida, size nasıl yardımcı olabilirim?</Text>
        </View>

        {/* Önceki ve Sonraki Düğmeleri */}
        <View style={styles.DotsContainer}>
          {/* Önceki düğmesi */}
          <TouchableOpacity onPress={this.handlePrevPress}>
            <Image source={require('../../../../assets/ToyImage/previous.png')} />
          </TouchableOpacity>
          
          {/* Sayfalama Noktaları */}
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
          
          {/* Sonraki düğmesi */}
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
