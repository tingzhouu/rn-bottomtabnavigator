import React, { Component } from 'react';
import { View, Image, StatusBar } from 'react-native';

class DiscoverContainer extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 20 }}>
        <StatusBar barStyle="dark-content" />
        <Image style={{flex: 1, resizeMode: 'contain'}} source={require('../assets/discover.jpg')} />
      </View>
    );
  }
}
export default DiscoverContainer;
