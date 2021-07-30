import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import { DocumentPicker } from 'react-native-document-picker';
import {connect} from 'react-redux';
import { CountryDropdown } from './dropdownCountry';

export class ProfileScreen extends Component {

pickAttachmentFile = async () => {
  const res = await DocumentPicker.pick({
    type: [DocumentPicker.type.images],
  })
  console.log(
    res.uri,
    res.type, // mime type
    res.name,
    res.size
  );
}

topView() {
  return (
    <View style={{marginVertical: 4}}>
      <Text>Welcome to my Profile. </Text>
      <TouchableOpacity>
          <Text
            onPress={() => {
              this.props.navigation.navigate('ScreenHome');
            }}>
            click me to return to Home.
          </Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 4}}>
      <Text style={{fontWeight: '700'}}>Attachment</Text>
      <TouchableOpacity onPress={() => this.pickAttachmentFile()}>
        <Image source={require('../../assets/attachment_icon.png')} style={{width: 22, height: 22}} />
      </TouchableOpacity>
      </View>
    </View>
  )
}

  render() {
    return (
      <View style={{margin:6}}>
        {this.topView()}
        <CountryDropdown />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
