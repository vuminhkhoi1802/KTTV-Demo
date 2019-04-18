import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Button,
  FlatList,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import { List, ListItem } from "react-native-elements";
import { AppColors } from '@app/config';

export default class StationTypes extends React.Component {
  static navigationOptions = {
    title: "Kiểu Trạm",
    headerStyle: {
      backgroundColor: AppColors.primary,
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
      dataSource: []
    };
  }

  componentDidMount() {
    return fetch(
      "http://192.168.100.88:8000/api/station_information/stationtype/?format=json"
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.results
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <Text>Loading the Station Type Data</Text>
          <ActivityIndicator />
        </View>
      );
    } else {
      let station_types = this.state.dataSource.map((val, key) => {
        return (
                 <View key={key} style={styles.container}>
            <Button onPress={() => {
               this.props.navigation.navigate("StationList");
             }}
          
              title={val.stationtype_name}
            />
          </View>
          // {/* <SafeAreaView key={key}>
          //   <TouchableOpacity
          //     onPress={() => {
          //       this.props.navigation.navigate("StationList");
          //     }}
          //   >
          //     <List
          //       contentContainerStyle={{
          //         borderTopWidth: 0,
          //         borderBottomWidth: 0
          //       }}
          //     >
          //       <ListItem
          //         title={val.stationtype_name}
          //         subtitle={val.stationtype_code}
          //       />
          //     </List>
          //   </TouchableOpacity>
          // </SafeAreaView> */}

    
        );
      });
      return (
        <SafeAreaView style={styles.container}>
          <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
          >
            {station_types}
          </ScrollView>
        </SafeAreaView>
      );
    }

    //   let station_types = this.state.dataSource.map((val) => {
    //     return (

    //       <View style={styles.item}>
    //         <Button
    //           title={val.stationtype_name}
    //           onPress={() => {
    //             this.props.navigation.navigate("StationList");
    //           }}
    //         />
    //       </View>
    //     );
    //   });
  }
}

// _maybeRenderDevelopmentModeWarning() {
//   if (__DEV__) {
//     const learnMoreButton = (
//       <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
//         Learn more
//       </Text>
//     );

//     return (
//       <Text style={styles.developmentModeText}>
//         Development mode is enabled, your app will be slower but you can use useful development
//         tools. {learnMoreButton}
//       </Text>
//     );
//   } else {
//     return (
//       <Text style={styles.developmentModeText}>
//         You are not in development mode, your app will run at full speed.
//       </Text>
//     );
//   }
// }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
    // alignItems: "center",
    // justifyContent: "center"
  },
  item: {
    flex: 1,
    alignSelf: "stretch",
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#eee"
  }
});
