import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  ActivityIndicator,
  Platform,
} from 'react-native';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from 'react-native-table-component';
import {AppColors} from '@app/config';
import apiURL from '../../utils/apiURL';

export default class StationStats extends React.Component {
  static navigationOptions = {
    title: 'Báo cáo thống kê trạm quan trắc',
  };

  constructor (props) {
    super (props);
    this.state = {
      tableHead: ['STT', 'Mã Trạm', 'Địa chỉ', 'Yếu tố đo', 'Tình trạng'],
      isLoading: true,
      error: null,
    };
  }
  componentDidMount () {
    url = `${apiURL}api/station_management_information/stations/`;
    return fetch (url)
      .then (response => response.json ())
      .then (responseJson => {
        tableData = [];
        for (let i = 0; i < responseJson.length; i++) {
          let status;
          let address = `${responseJson[i].ward__ward_name}, ${responseJson[i].district__district_name}, ${responseJson[i].province__province_name}`;
          if (responseJson[i].status === 0) {
            status = 'Ngừng Hoạt Động';
          } else if (responseJson[i].status === 1) {
            status = 'Đang Hoạt Động';
          }
          tableData.push ([
            i,
            responseJson[i].station_code,
            address,
            '',
            status,
          ]);
        }

        this.setState (
          {
            isLoading: false,
            dataSource: responseJson,
            tableData: tableData,
          },
          function () {
            this.arrayHolder = responseJson;
          }
        );
      })
      .catch (error => {
        console.log (error);
      });
  }

  render () {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator />
        </View>
      );
    } else {
      const widthArray = Platform.OS === 'ios'
        ? [50, 70, 90, 80, 80]
        : [50, 70, 100, 80, 80];
      return (
        <ScrollView style={styles.container}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              paddingBottom: 20,
            }}
          >
            <Text style={styles.title}>Trạm Tự Động </Text>
            <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
              <Row
                data={this.state.tableHead}
                style={styles.head}
                textStyle={styles.text}
                widthArr={widthArray}
              />
              <Rows
                data={this.state.tableData}
                textStyle={styles.text}
                widthArr={widthArray}
              />
            </Table>

          </View>

        </ScrollView>
      );
    }
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: '#fff',
    paddingBottom: 20,
  },
  head: {
    height: 40,
    backgroundColor: '#f1f8ff',
  },
  text: {
    margin: 6,
  },
  title: {
    fontSize: 24,
    color: AppColors.black,
    marginBottom: 15,
    marginTop: 15,
    fontWeight: 'bold',
  },
  scrollTable: {
    height: 500,
  },
  header: {
    height: 50,
    backgroundColor: '#537791',
  },
});
