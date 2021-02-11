import React, { Component } from 'react';
import {Text, View, StyleSheet } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {HomeScreen} from './src/components/home';
import {ProfileScreen} from './src/components/profile';

class SettingsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Please visit Settings from drawer!</Text>
      </View>
    );
  }
}

class AboutMeScreen extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.aboutMeText}>This is demo app created by Mohit Garg. Thanks for go through this.</Text>
        </View>
      );
    }
  }

const TabNavigator = createBottomTabNavigator(
  {
    ScreenHome: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Home',
      },
    },
    Profile: {screen: ProfileScreen},
    Settings: {screen: SettingsScreen},
    About: {screen: AboutMeScreen}
  },
  {
    initialRouteName: 'ScreenHome',
  },
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  aboutMeText: {
    marginHorizontal: 16
  }
});

export default TabNavigator;
