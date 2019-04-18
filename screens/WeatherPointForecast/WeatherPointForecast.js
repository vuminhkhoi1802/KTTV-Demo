import React from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import WeatherCard from '../../components/WeatherCard';
import AppCorlor from '../../config/AppColors';
import {Constants, Location, Permissions} from 'expo';
import apiURL from '../../utils/apiURL';

export default class WeatherPointForecast extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      isLoading: true,
      longitude: 'unknown',
      latitude: 'unknown',
      forecast: [],
    };
  }
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     latitude: 21.0245,
  //     longitude: 105.84117,
  //     forecast: [],
  //     error: ''
  //   }
  // }

  componentDidMount () {
    // Get the user's location
    let url =
      apiURL +
      'api/data_collection_support/weather_forecast_point/?lat=20.95&lon=106.21';
    // let url =
    //   'http://192.168.2.68:8000/api/data_collection_support/weather_forecast_point/?lat='+ this.state.latitude + '&lon='+this.state.longitude
    fetch (url)
      .then (response => response.json ())
      .then (data => {
        this.setState (() => ({
          isLoading: false,
          forecast: data,
        }));
      })
      .catch (error => {
        console.log (error);
      });
  }

  // getLocation () {
  //   navigator.geolocation.getCurrentPosition(
  //     position => {
  //       this.setState(
  //         prevState => ({
  //           latitude: position.coords.latitude,
  //           longitude: position.coords.longitude
  //         }),
  //         () => {
  //           this.getWeather()
  //         }
  //       )
  //     },
  //     error => this.setState({ forecast: error.message }),
  //     { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  //   )
  // }

  // getWeather () {
  //   console.log(this.state.latitude)
  //   console.log(this.state.longitude)
  //   let url =
  //     'http://192.168.2.68:8000/api/data_collection_support/weather_forecast_point/?lat=20.95&lon=106.21'
  //   // let url =
  //   //   'http://192.168.2.68:8000/api/data_collection_support/weather_forecast_point/?lat='+ this.state.latitude + '&lon='+this.state.longitude
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(data => {
  //       this.setState((prevState, props) => ({
  //         isLoading: false,
  //         forecast: data
  //       }))
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }

  render () {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>

          <View
            style={{
              height: 250,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <FlatList
              data={[this.state.forecast]}
              style={{
                backgroundColor: 'transparent',
                opacity: 1,
                flex: 1,
              }}
              horizontal={true}
              keyExtractor={(item, index) => index.toString ()}
              renderItem={({item}) => {
                return <WeatherCard item={item} parentFlatList={this} />;
              }}
            />
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
});
