import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {styles} from './styles';

export class SettingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
    };
  }

  textView = () => {
    return (
      <View>
        <Text>{this.state.userInput}</Text>
      </View>
    );
  };

  textInputView = () => {
    return (
      <View style={styles.inputBoxView}>
        <TextInput
          placeholder="Type here.."
          onChangeText={(text) => this.setState({userInput: text})}
        />
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          {this.textView()}
          {this.textInputView()}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SettingScreen);
