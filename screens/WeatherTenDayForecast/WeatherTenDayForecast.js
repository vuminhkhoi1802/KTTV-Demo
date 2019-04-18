import React from 'react'
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  PermissionsAndroid,
  Platform
} from 'react-native'
import TenDayWeather from '../../components/TenDayWeather'
import apiURL from '../../utils/apiURL'

export default class WeatherTenDayForecast extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true,
      longitude: 'unknown',
      latitude: 'unknown'
    }
  }

  getLocation () {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState(
          prevState => ({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          }),
          () => {
            this.getWeather()
          }
        )
      },
      error => this.setState({ forecast: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    )
  }

  getWeather () {
    let url = apiURL+ 'api/data_collection_support/weather_forecast_point/?lat=20.95&lon=106.21'
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState(() => ({
          isLoading: false,
          forecast: data.future
        }))
      }).catch(error => {
        console.log(error)
      })
  }

  componentDidMount () {
    // this.getLocation()
    this.getWeather()
  }

  render () {
    if (this.state.isLoading) {
      return (
        <View style={StyleSheet.container}>
          <ActivityIndicator />
        </View>
      )
    }
    return (
      <View style={{ height: 180 }}>
        <FlatList
          style={{
            backgroundColor: 'transparent',
            opacity: 1
          }}
          horizontal
          data={this.state.forecast}
          renderItem={({ item }) => {
            return (
              <TenDayWeather item={item}  parentFlatList={this} />
            )
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
