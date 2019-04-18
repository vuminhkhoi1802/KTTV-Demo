import React, { Component } from "react";
import { WebView, View, StyleSheet, StatusBar,Text } from "react-native";
import PDFReader from "rn-pdf-reader-js";
import { Constants } from "expo";


export default class ForecastInfo extends Component {
  
  render() {
    return (
    
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <PDFReader
          source={{
            uri: "http://gahp.net/wp-content/uploads/2017/09/sample.pdf"
          }}
        />
        <View>
        <Text>
          Some comments below
        </Text>

        </View>
    
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#ecf0f1"
  }
});
