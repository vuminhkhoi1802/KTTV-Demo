import React from 'react';
import {Constants, Location, Permissions} from 'expo';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Platform,
  Alert,
  FlatList,
  ImageBackground,
  TouchableHighlight,
  Image,
  Dimensions,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import {AppColors} from '@app/config';
import WeatherChart from '../components/WeatherChart';
import WeatherPointForecast from './WeatherPointForecast/WeatherPointForecast';
import WeatherTenDayForecast
  from './WeatherTenDayForecast/WeatherTenDayForecast';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor (props) {
    super (props);

    this.state = {
      hasLocationPermissions: false,
      locationResult: null,
      error: null,
      refreshing: false,
      isLoading: true,
      forecast: [],
      future: [],
    };
  }

  _onRefresh = () => {
    this.setState ({refreshing: true});
    fetchData ().then (() => {
      this.setState ({refreshing: false});
    });
  };

  async fetchData () {
    let url =
      apiURL +
      'api/data_collection_support/weather_forecast_point/?lat=20.95&lon=106.21';
    try {
      const response = await fetch (url);
      const responseJson = await response.json ();
      this.setState ({
        isLoading: false,
        forecast: responseJson,
        future: responseJson.future,
      });
    } catch (error) {
      console.log (error);
    }
  }

  render () {
    const {navigate} = this.props.navigation;
    // if (this.state.isLoading) {
    //   return (
    //     <View style={styles.container}>
    //       <ActivityIndicator />
    //     </View>
    //   );
    // } else {
      return (
        <View
          style={{
            paddingTop: 1,
            flex: 1,
            flexDirection: 'column',
            marginTop: Platform.OS === 'android' ? 0 : 0,
            backgroundColor: '#2e7af4',
          }}
        >
          {/* <RefreshControl
        refreshing={this.state.refreshing}
        onRefresh={this._onRefresh}
        style={{flex: 1}}> */}

          <View
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
            }}
          >
            <ImageBackground
              style={{
                flex: 1,
                flexDirection: 'column',
                resizeMode: 'cover',
                width: null,
                height: null,
                backgroundColor: 'transparent',
                justifyContent: 'center',
              }}
              source={require ('../assets/background.jpg')}
            />
          </View>
          <ScrollView style={styles.container}>
            <Text style={styles.headText}>Thời Tiết Hiện Tại </Text>
            {/* <View
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
                  return <WeatherCard item={item} parentFlatList={this} />
                }}
              />
            </View> */}
            <WeatherPointForecast/>
            <Text style={styles.headText}>Dự Báo 10 Ngày Tiếp Theo</Text>
            <WeatherTenDayForecast />
            <View>
              <WeatherChart />
            </View>
          </ScrollView>
        </View>
      );
    // }
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
  newsContainer: {
    backgroundColor: AppColors.primary,
    flex: 1,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  cards: {
    flex: 3,
  },
  headText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'transparent',
    margin: 20,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 20,
    marginLeft: 20,
    color: AppColors.black,
  },
  item: {
    margin: 5,
    flexDirection: 'row',
  },
  img: {
    width: 175,
    height: 110,
    marginRight: 5,
    marginLeft: 5,
  },
  text: {
    color: AppColors.black,
    fontSize: 22,
    marginTop: 5,
    marginLeft: 5,
    width: Dimensions.get ('window').width - 200,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: AppColors.grey,
  },
});
