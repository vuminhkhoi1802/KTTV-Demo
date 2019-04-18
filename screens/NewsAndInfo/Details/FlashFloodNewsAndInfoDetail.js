import React, { Component } from 'react'
import {
  WebView,
  View,
  StyleSheet,
  StatusBar,
  Text,
  ScrollView,
  Dimensions,
  Button
} from 'react-native'
import PDFReader from 'rn-pdf-reader-js'
import { Constants, FileSystem, WebBrowser } from 'expo'
import { apiURL } from '@app/apiURL'

const apiURI = `${apiURL}media/`

export default class FlashFloodNewsAndInfoDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', 'Tin chi tiết')
    }
  }

  state = {
    result: null
  }

  _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync(
      `${apiURI}${this.props.navigation.state.params.item.flash_flood_file}`
    )
    this.setState({ result })
  }

  makeDownload () {
    FileSystem.downloadAsync(
      `${apiURI}${this.props.navigation.state.params.item.flash_flood_file}`,
      FileSystem.documentDirectory +
        `${this.props.navigation.state.params.item.flash_flood_title}.pdf`
    )
      .then(({ uri }) => {
        console.log('Finished downloading to ', uri)
        return (
          <View style={styles.container}>
            <PDFReader
              source={{
                uri: uri
              }}
            />
          </View>
        )
      })
      .catch(error => {
        console.error(error)
      })
  }

  render () {
    console.log(
      `${apiURI}${this.props.navigation.state.params.item.flash_flood_file}`
    )
    return (
      <View style={styles.container}>
        <Text style={styles.headText}>
          {this.props.navigation.state.params.item.flash_flood_title}
        </Text>
        <PDFReader
          source={{
            uri: `${apiURI}${
              this.props.navigation.state.params.item.flash_flood_file
            }`
          }}
        />

        {/* <WebView
					source={{ uri: `${apiURI}${this.props.navigation.state.params.item.flash_flood_file}` }}
					style={styles.webview}
					javaScriptEnabled={true}
					domStorageEnabled={true}
					startInLoadingState={true}
				/> */}
      </View>

    // <View style={styles.container}>
    // 	<Button style={styles.paragraph} title="Open WebBrowser" onPress={this._handlePressButtonAsync} />
    // 	{/* <Text>{this.state.result && JSON.stringify(this.state.result)}</Text> */}
    // </View>
    )
  }
}

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1'
    // backgroundColor: "#ecf0f1"
  },
  webview: {
    width: deviceWidth,
    height: deviceHeight
  },
  headText: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingLeft: 30
  }
})
