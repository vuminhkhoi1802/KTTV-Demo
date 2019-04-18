import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {LineChart, BarChart} from 'react-native-chart-kit';
import apiURL from '../utils/apiURL';
import Moment from 'moment';

export default class WeatherChart extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      isLoading: true,
      error: null,
      rainChartData: [],
      rainChartLabel: [],
      temperatureChartLabel: [],
      temperatureChartData: [],
    };
  }

  componentDidMount () {
    let url =
      apiURL +
      'api/data_collection_support/weather_forecast_point/?lat=20.95&lon=106.21';
    return fetch (url)
      .then (response => response.json ())
      .then (data => {
        rainChartData = [];
        rainChartLabel = [];
        temperatureChartLabel = [];
        temperatureChartData = [];
        for (let i = 0; i < data.future.length; i++) {
          let date = Moment (data.future[i].date_time_value).format ('DD/MM');
          rainChartLabel.push (date);
          rainChartData.push (data.future[i].rain_value);
        }
        for (let i = 0; i < data.future.length; i++) {
          let date = Moment (data.future[i].date_time_value).format (
            'DD/MM'
          );
          temperatureChartLabel.push (date);
          temperatureChartData.push (data.future[i].degrees_max);
        }
        this.setState ((prevState, props) => ({
          isLoading: false,
          rainData: data.rain,
          temperatureData: data.temperature,
          rainChartData: rainChartData,
          rainChartLabel: rainChartLabel,
          temperatureChartData: temperatureChartData,
          temperatureChartLabel: temperatureChartLabel,
        }));
      })
      .catch (error => {
        console.log (error);
      });
  }

  render () {
    const rainData = {
      labels: this.state.rainChartLabel,
      datasets: [{data: this.state.rainChartData}],
    };

    const temperatureData = {
      labels: this.state.temperatureChartLabel,
      datasets: [
        {
          data: this.state.temperatureChartData,
          // color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          strokeWidth: 2, // optional
        },
      ],
    };

    const widthArray = {labels: [], datasets: []};
    const chartConfig = {
      backgroundGradientFrom: '#1E2923',
      backgroundGradientTo: '#08130D',

      strokeWidth: 2, // optional, default 3
    };

    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Text style={styles.headText}>Biểu Đồ Lượng Mưa</Text>
        <ScrollView horizontal>
          <BarChart
            data={rainData}
            // width={Dimensions.get ('window').width} // from react-native

            width={540}
            height={220}
            yAxisLabel={'$'}
            chartConfig={{
              backgroundColor: 'white',
              backgroundGradientFrom: '#f2f2f2',
              backgroundGradientTo: '#a6a6a6',

              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              strokeWidth: 2, // optional, default 3
              style: {
                borderRadius: 9,
              },
            }}
            style={{
              marginVertical: 0,
            }}
          />
        </ScrollView>

        <Text style={styles.headText}>Biểu Đồ Nhiệt Độ</Text>
        <ScrollView horizontal>
          <LineChart
            //width={Dimensions.get ('window').width}
            withInnerLines
            withOuterLines
            withDots={false}
            height={220}
            width={480}
            yAxisLabel={'$'}
            data={temperatureData}
            chartConfig={{
              backgroundColor: 'white',
              backgroundGradientFrom: '#f2f2f2',
              backgroundGradientTo: '#a6a6a6',
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {},
            }}
            style={{marginVertical: 0, paddingBottom: 10}}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
  headText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: 'transparent',
    margin: 20,
  },
});
