import React, {Component} from 'react';
import {StyleSheet, View, Platform, Dimensions} from 'react-native';
import {Text, Card, Divider} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

var horizontalStatus = {
  flash: {
    ios:'ios-flash',
    android:'md-flash'
  },
  rainy: {
    ios: 'ios-rainy',
    android: 'md-rainy',
  },
  cloudy: {
    ios: 'ios-cloudy',
    android: 'md-cloudy',
  },
  thunderstorm: {
    ios: 'ios-thunderstorm',
    android: 'md-thunderstorm',
  },
  sunny: {
    ios: 'ios-sunny',
    android: 'md-sunny',
  },
};

export default class WeatherCard extends Component {
  render () {
    let weatherCond;
    let weatherCondText;
    if (this.props.item.weather_condition === 0) {
      weatherCond = horizontalStatus.flash;
      weatherCondText = 'Sét đánh'
    } else if (this.props.item.weather_condition === 1) {
      weatherCond = horizontalStatus.rainy;
      weatherCondText = 'Mưa';
    } else if (this.props.item.weather_condition === 2) {
      weatherCond = horizontalStatus.cloudy;
      weatherCondText = 'Mây mù';
    } else if (this.props.item.weather_condition === 3) {
      weatherCond = horizontalStatus.thunderstorm;
      weatherCondText = 'Sấm chớp';
    } else if (this.props.item.weather_condition === 4) {
      weatherCond = horizontalStatus.sunny;
      weatherCondText = 'Nắng';
    }

    return (
      <Card width={300} containerStyle={styles.card}>
        <Text style={styles.notes}>{this.props.item.position}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          <Icon
            style={{width: 80, height: 80, marginTop: 20}}
            size={60}
            color="white"
            name={Platform.OS === 'ios' ? weatherCond.ios : weatherCond.android}
          />
          <Text style={styles.main}>
            {Math.round (this.props.item.tsrf).toFixed ()}°C
          </Text>
        </View>

        <Divider style={{backgroundColor: '#dfe6e9', marginVertical: 10}} />

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.notes}>Độ ẩm: </Text>
          <Text style={styles.notes}>{this.props.item.rhsrf}%</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.notes}>Tốc độ gió: </Text>
          <Text style={styles.notes}>{this.props.item.wind_speed} km/h</Text>
        </View>

      </Card>
    );
  }
}

const styles = StyleSheet.create ({
  card: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'grey',
  },
  time: {
    fontSize: 38,
    color: '#fff',
  },
  main: {
    fontSize: 38,
    color: '#fff',
  },
  notes: {
    fontSize: 18,
    color: '#fff',
    textTransform: 'capitalize',
  },
});
