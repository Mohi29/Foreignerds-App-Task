import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {ProfileScreen} from './src/components/profile';
import {SettingScreen} from './src/components/setting';
import {PurchaseScreen} from './src/components/purchase';
import BottomTabScreens from './myBottomTab';

let colorConst = require('./src/globalComponent/colorConstants');

class NavigationStructure extends Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Image
            source={require('./src/assets/menu_icon.png')}
            style={styles.headerImageStyle}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const FirstActivity_StackNavigator = createStackNavigator({
  ScreenHome: {
    screen: BottomTabScreens,
    navigationOptions: ({navigation}) => ({
      title: 'User Home Screen',
      headerLeft: () => <NavigationStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: colorConst.HEADER_BACKGROUND_COLOR,
      },
      headerTintColor: colorConst.HEADER_TINT_COLOR,
    }),
  },
  ScreenProfile: {
    screen: ProfileScreen,
    navigationOptions: ({navigation}) => ({
      title: 'User Profile Screen',
      headerLeft: () => <NavigationStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: colorConst.HEADER_BACKGROUND_COLOR,
      },
      headerTintColor: colorConst.HEADER_TINT_COLOR,
    }),
  },
});

const SecondActivity_StackNavigator = createStackNavigator({
  // ScreenHome: {  check for applying bottom tab bar for all drawer items
  //   screen: BottomTabScreens,
  //   navigationOptions: ({navigation}) => ({
  //     title: 'User Home Screen',
  //     headerLeft: () => <NavigationStructure navigationProps={navigation} />,
  //     headerStyle: {
  //       backgroundColor: colorConst.HEADER_BACKGROUND_COLOR,
  //     },
  //     headerTintColor: colorConst.HEADER_TINT_COLOR,
  //   }),
  // },
  Second: {
    screen: ProfileScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Profile with Drawer',
      headerLeft: () => <NavigationStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: colorConst.HEADER_BACKGROUND_COLOR,
      },
      headerTintColor: colorConst.HEADER_TINT_COLOR,
    }),
  },
});

const ThirdActivity_StackNavigator = createStackNavigator({
  Third: {
    screen: SettingScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Setting with Drawer',
      headerLeft: () => <NavigationStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: colorConst.HEADER_BACKGROUND_COLOR,
      },
      headerTintColor: colorConst.HEADER_TINT_COLOR,
    }),
  },
});

const PurchaseActivity_StackNavigator = createStackNavigator({
  Forth: {
    screen: PurchaseScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Purchase with GPay',
      headerLeft: () => <NavigationStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: colorConst.HEADER_BACKGROUND_COLOR,
      },
      headerTintColor: colorConst.HEADER_TINT_COLOR,
    }),
  },
});

const Drawer = createDrawerNavigator({
  Screen1: {
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Home',
    },
  },
  Screen2: {
    screen: SecondActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Drawer Profile',
    },
  },
  Screen3: {
    screen: ThirdActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Drawer Setting',
    },
  },
  Screen4: {
    screen: PurchaseActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Purchase',
    },
  },
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  headerImageStyle: {
    width: 32,
    height: 32,
    marginLeft: 5,
    borderRadius: 5,
  },
});

export default createAppContainer(Drawer);
