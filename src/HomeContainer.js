import React, { Component } from 'react';
import { View, Image, StatusBar } from 'react-native';

class HomeContainer extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ backgroundColor: '#2D72D8', height: 20, width: '100%' }} />
        <StatusBar backgroundColor="#2D72D8" barStyle="light-content" />
        <Image style={{flex: 1, resizeMode: 'contain'}} source={require('../assets/home.jpg')} />
      </View>
    );
  }
}
export default HomeContainer;
