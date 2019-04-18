import React, { Component } from "react";
import { WebView } from "react-native";

export default class KTTVAbout extends Component {
  static navigationOptions = {
    title: "About",
    headerStyle: {
      backgroundColor: "#00a8e0"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  render() {
    return (
      <WebView
        originWhitelist={["*"]}
        source={{ html: "<h1>Hello world</h1>" }}
      />
    );
  }
}
