import React, {Component} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {styles} from './styles';

export class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <View style={styles.innerContainer}>
          <Text>This is a Demo App.</Text>
          <TouchableOpacity>
            <Button
              title="click me to jump to profile page"
              onPress={() => {
                this.props.navigation.navigate('ScreenProfile');
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
