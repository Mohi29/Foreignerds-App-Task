import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

export class ProfileScreen extends Component {
  render() {
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
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
