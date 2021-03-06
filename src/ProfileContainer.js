import React, { Component } from 'react';
import { View, Image, StatusBar } from 'react-native';

class ProfileContainer extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 20 }}>
        <StatusBar barStyle="dark-content" />
        <Image style={{flex: 1, resizeMode: 'contain'}} source={require('../assets/profile.jpg')} />
      </View>
    );
  }
}
export default ProfileContainer;
