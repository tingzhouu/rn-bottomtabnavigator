import React, {Fragment} from 'react';

import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

import { useScreens } from 'react-native-screens';

import { Image } from 'react-native';

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
    tabBarOptions: {
      activeTintColor: '#1946B1',
      // inactiveTintColor: 'orange',
    },
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconSource;
        if (routeName === 'Home') {
          iconSource = focused ? require('./assets/home_blue.png') : require('./assets/home_black.png')
        } else if (routeName === 'Accounts') {
          iconSource = focused ? require('./assets/accounts_blue.png') : require('./assets/accounts_black.png')
        } else if (routeName === 'Reports') {
          iconSource = focused ? require('./assets/reports_blue.png') : require('./assets/reports_black.png')
        } else if (routeName === 'Discover') {
          iconSource = focused ? require('./assets/discover_blue.png') : require('./assets/discover_black.png')
        } else if (routeName === 'Profile') {
          iconSource = focused ? require('./assets/profile_blue.png') : require('./assets/profile_black.png')
        }

        return (
          <Image
            source={iconSource}
            style={{ height: 20, width: 20, resizeMode: 'contain' }}
          />
        );
      },
    }),
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
