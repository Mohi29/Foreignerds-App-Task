import React, { Component } from 'react';
import {Text, View, StyleSheet, Image } from 'react-native';
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
      navigationOptions: { //default name is taken like ScreenHome
        tabBarLabel: 'Home',
        tabBarIcon: <Image source={require('./src/assets/home_icon.png')} style={{width:22, height:22}} />,
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions:{
        tabBarIcon: <Image source={require('./src/assets/profile_icon2.png')} style={{width:22, height:22}} />,
      }
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions:{
        tabBarIcon: <Image source={require('./src/assets/setting_icon1.jpeg')} style={{ backgroundColor: 'red', width:22, height:22}} />,
      }
    },
    About: {
      screen: AboutMeScreen,
      navigationOptions:{
        tabBarIcon: <Image source={require('./src/assets/about_icon1.jpeg')} style={{ backgroundColor: 'red', width:22, height:22}} />,
      }
    }
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
