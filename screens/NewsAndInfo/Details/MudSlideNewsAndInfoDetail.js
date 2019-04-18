import React, {Component} from 'react';
import {
  WebView,
  View,
  StyleSheet,
  StatusBar,
  Text,
  ScrollView,
  Dimensions,
  Button,
} from 'react-native';
import PDFReader from 'rn-pdf-reader-js';
import {Constants, FileSystem, WebBrowser} from 'expo';
import {apiURL} from '@app/apiURL';

const apiURI = `${apiURL}media/`;

export default class MudSlideNewsAndInfoDetail extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam ('title', 'Tin chi tiết'),
    };
  };

  state = {
    result: null,
  };

  render () {
    console.log (
      `${apiURI}${this.props.navigation.state.params.item.mudslide_information_file}`
    );
    return (
      <View style={styles.container}>
        <PDFReader
          source={{
            uri: `${apiURI}${this.props.navigation.state.params.item.mudslide_information_file}`,
          }}
        />
      </View>
    );
  }
}

const deviceHeight = Dimensions.get ('window').height;
const deviceWidth = Dimensions.get ('window').width;

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    // backgroundColor: "#ecf0f1"
  },
  webview: {
    width: deviceWidth,
    height: deviceHeight,
  },
  headText: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingLeft: 30,
  },
});
