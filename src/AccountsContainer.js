import React, { Component } from 'react';
import { View, Image, StatusBar } from 'react-native';

class AccountsContainer extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 20 }}>
        <StatusBar barStyle="dark-content" />
        <Image style={{flex: 1, resizeMode: 'contain'}} source={require('../assets/accounts.jpg')} />
      </View>
    );
  }
}
export default AccountsContainer;
