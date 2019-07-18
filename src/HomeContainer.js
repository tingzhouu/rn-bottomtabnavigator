import React, { Component } from 'react';
import { View, Image } from 'react-native';

class HomeContainer extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 20 }}>
        <Image style={{flex: 1, resizeMode: 'contain'}} source={require('../assets/home.jpg')} />
      </View>
    );
  }
}
export default HomeContainer;
