import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import { CountryDropdown } from './dropdownCountry';

export class ProfileScreen extends Component {

topView() {
  return (
    <View>
      <Text> Welcome to my Profile. </Text>
      <TouchableOpacity>
          <Text
            onPress={() => {
              this.props.navigation.navigate('ScreenHome');
            }}>
            click me to return to Home.
          </Text>
      </TouchableOpacity>
    </View>
  )
}

  render() {
    return (
      <View>
        {this.topView()}
        <CountryDropdown />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
