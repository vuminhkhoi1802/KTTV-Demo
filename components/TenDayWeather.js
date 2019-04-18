import React from 'react'
import { View, Text, TouchableOpacity, Platform, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Divider } from 'react-native-elements'

var horizontalStatus = {
  flash: {
    ios:'ios-flash',
    android:'md-flash'
  },
  rainy: {
    ios: 'ios-rainy',
    android: 'md-rainy'
  },
  cloudy: {
    ios: 'ios-cloudy',
    android: 'md-cloudy'
  },
  thunderstorm: {
    ios: 'ios-thunderstorm',
    android: 'md-thunderstorm'
  },
  sunny: {
    ios: 'ios-sunny',
    android: 'md-sunny'
  }
}

export default class TenDayWeather extends React.Component {
  render () {
    let weatherCond
    if( this.props.item.weather === 0){
      weatherCond = horizontalStatus.flash
    } else if (this.props.item.weather === 1) {
      weatherCond = horizontalStatus.rainy
    } else if (this.props.item.weather === 2) {
      weatherCond = horizontalStatus.cloudy
    } else if (this.props.item.weather === 3) {
      weatherCond = horizontalStatus.thunderstorm
    } else if (this.props.item.weather === 4) {
      weatherCond = horizontalStatus.sunny
    }

    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          width: 90,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: 'grey',
          margin: 4
        }}
      >
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
          }}
        />
        <Text
          style={{
            fontSize: 13,
            fontWeight: 'bold',
            color: 'white',
            margin: 10
          }}
        >
          {this.props.item.day}
        </Text>
        <Icon
          name={Platform.OS === 'ios' ? weatherCond.ios : weatherCond.android}
          size={30}
          color='white'
        />
        <Text
          style={{
            fontSize: 16,
            margin: 10,
            color: 'white',
            alignContent: 'center'
          }}
        >
          {Math.round(this.props.item.degrees_max).toFixed()}°C {'\n'}{'\n'}
          {Math.round(this.props.item.degrees_min).toFixed()}°C {'\n'}
        </Text>
  
      </View>
    )
  }
}
