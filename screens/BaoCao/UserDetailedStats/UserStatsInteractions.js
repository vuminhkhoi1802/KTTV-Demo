import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
  Platform,
  ScrollView,
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
import Moment from 'moment';
import apiURL from '../../../utils/apiURL';

export default class UserStatsInteraction extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam ('title', 'Thống Kê Người Dùng'),
    };
  };

  constructor (props) {
    super (props);
    this.state = {
      tableHead: ['STT', 'Người dùng', 'Hoạt động', 'Thời gian thực hiện'],
      isLoading: true,
      error: null,
    };
  }

  componentDidMount () {
    this.fetchData ();
  }

  async fetchData () {
    url = `${apiURL}api/user/useraction/?format=json`;
    try {
      const response = await fetch (url);
      const responseJson = await response.json ();
      tableData = [];
      for (let i = 0; i < responseJson.results.length; i++) {
        let action;
        let actionDate = Moment (responseJson.results[i].action_time).format (
          'l'
        );
        if (responseJson.results[i].action_flag === 0) {
          action = 'Thêm dữ liệu';
        } else if (responseJson.results[i].action_flag === 1) {
          action = 'Xóa dữ liệu';
        }
        tableData.push ([
          i,
          responseJson.results[i].username,
          action,
          actionDate,
        ]);
      }
      this.setState (
        {
          isLoading: false,
          dataSource: responseJson.results,
          tableData: tableData,
        },
        function () {
          this.arrayHolder = responseJson.results;
        }
      );
    } catch (error) {
      console.log (error);
    }
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
        ? [50, 70, 90, 100]
        : [50, 70, 100, 100];
      return (
        // <View style = {{flex: 1, paddingBottom:20}}>
        (
          <ScrollView style={{flex: 1}}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                paddingBottom: 20,
              }}
            >

              <Text style={styles.title}>Thống Kê Thao Tác Người Dùng </Text>

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
        )
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
    // alignItems:'center',
    // justifyContent:'center'
  },
  head: {
    height: 40,
    backgroundColor: '#f1f8ff',
    // paddingBottom: 30
  },
  text: {
    margin: 6,
  },
  title: {
    fontSize: 20,
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
