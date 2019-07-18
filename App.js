/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';

import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

import { useScreens } from 'react-native-screens';

import HomeContainer from "./src/HomeContainer";
import AccountsContainer from './src/AccountsContainer';
import ReportsContainer from './src/ReportsContainer';
import DiscoverContainer from "./src/DiscoverContainer";
import ProfileContainer from "./src/ProfileContainer";

useScreens();

const AppNavigator = createBottomTabNavigator(
  {
    Home: HomeContainer,
    Accounts: AccountsContainer,
    Reports: ReportsContainer,
    Discover: DiscoverContainer,
    Profile: ProfileContainer,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: { // we can share navigationOptions across screens
      headerStyle: { // applied to the <View> that wraps the header
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff', // color for back button and title
      headerTitleStyle: { // customize text properties for the title
        fontWeight: 'bold',
      },
    },
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
