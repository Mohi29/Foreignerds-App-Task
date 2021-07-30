import React, {Component} from 'react';
import {View, Text, Button, TouchableOpacity, NativeModules} from 'react-native';
import {connect} from 'react-redux';
import {styles} from './styles';
import * as RNLocalize from "react-native-localize";
import { Modalize } from 'react-native-modalize';

const MyFirstNative = NativeModules.FirstNativeModule;
export class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    modalizeRef = React.createRef()
  }

  onOpen = () => {
    modalizeRef.current?.open();
  };

  render() {
    console.log(RNLocalize.getCountry());
  console.log(RNLocalize.getCurrencies());
    return (
      <View style={{flex: 1}}>
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
          <View style={{marginTop: 10}}>
          <Button
              title="click me for native Toast"
              onPress={() => {
                MyFirstNative.showToastMessage("Hey, I am Android Toast", 5000);
              }}
            />
            </View>
            <View style={{marginTop: 10}}>
          <Button
              title="click me for opening modal"
              onPress={() => {
                this.onOpen()
              }}
            />
            </View>
            <Modalize 
            modalStyle={{backgroundColor: 'pink'}}
            ref={modalizeRef}
              snapPoint={200}
              HeaderComponent={<View>
              <Text>Modal View</Text>
            </View>}
            // withHandle={false}
                // modalHeight= {500}
                modalTopOffset= {450}
            >
            <View>
              <Text>abcd</Text>
            </View>
            </Modalize>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
