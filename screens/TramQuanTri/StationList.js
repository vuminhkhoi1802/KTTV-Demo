import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Linking
} from "react-native";


export default class StationList extends React.Component {
  static navigationOptions = {
    title: "Danh Sách Trạm",
    headerStyle: {
      backgroundColor: "#00a8e0"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [],
      error: null
      
    };
  }


  componentDidMount() {
    url = `http://192.168.100.88:8000/api/station_information/stations/?format=json`;
    return fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.results
        });
      })
      .catch(error => {
        console.log("ERROR!!!!");
        console.log(error);
      });
  }
  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <Text>Loading the Station Data</Text>
          <ActivityIndicator />
        </View>
      );
    } else {
      console.log(this.state.dataSource);
      let station_names = this.state.dataSource.map((val, key) => {
        return (
          <TouchableOpacity 
          onPress= { () => { Linking.openURL('192.168.100.88:8000/')}}
          key={key} style={styles.item}>
          <Text style={styles.item}>
                {val.station_name + "\n"}
                Station Code: {val.station_code + "\n"}
                Longitude: {val.longitude + "\n"}
                Latitude: {val.latitude}
              </Text>
          </TouchableOpacity>
            
        );
      });

      return (
        <View style={styles.container}>
          <View
            style={styles.item}
            contentContainerStyle={styles.contentContainer}
          >
            {station_names}
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },

  item: {
    flex: 1,
    alignSelf: "stretch",
    margin: 30,
    alignItems: "center",
    fontSize: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    backgroundColor: '#fff'
  }
});
