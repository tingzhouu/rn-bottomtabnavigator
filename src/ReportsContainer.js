import React, { Component } from 'react';
import { View, Image, StatusBar } from 'react-native';

class ReportsContainer extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 20 }}>
        <StatusBar barStyle="dark-content" />
        <Image style={{flex: 1, resizeMode: 'contain'}} source={require('../assets/reports.jpg')} />
      </View>
    );
  }
}
export default ReportsContainer;
