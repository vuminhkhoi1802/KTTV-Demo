import React from 'react'
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  ActivityIndicator,
  Platform
} from 'react-native'
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell
} from 'react-native-table-component'
import { AppColors } from '@app/config'
import Moment from 'moment'
// import apiURL from '@app/apiURL'
import apiURL from '../../../utils/apiURL'

export default class UserStatsGeneral extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title', 'Thống Kê Người Dùng'),
        };
    };

  constructor (props) {
    super(props)
    this.state = {
      tableHead: ['STT', 'Họ Tên', 'Tên truy cập', 'Trạng thái', 'Ngày tạo'],
      isLoading: true,
      error: null
    }
  }
  componentDidMount () {
    url = `${apiURL}api/user/user/?format=json`
    return fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        Moment.locale('en')
        tableData = []
        for (let i = 0; i < responseJson.results.length; i++) {
          console.log(responseJson.results[i])
          let status
            let createdDate = Moment(responseJson.results[i].created_at).format('MMMM Do YYYY, h:mm:ss a')

          if (responseJson.results[i].is_active === 0) {
            status = 'Đang Hoạt Động'
          } else if (responseJson.results[i].is_active === 1) {
            status = 'Đang Đình Chỉ'
          }
          tableData.push([
            i,
            responseJson.results[i].name,
            responseJson.results[i].username,
            status,
            createdDate
          ])
        }

        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.results,
            tableData: tableData
          },
          function () {
            this.arrayHolder = responseJson.results
          }
        )
      })
      .catch(error => {
        console.log(error)
      })
  }

  render () {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    } else {
      // const state = this.state;
      // const tableData = [];
      // for (let i = 0; i < 30; i += 1) {
      //   const rowData = [];
      //   for (let j = 0; j < 6; j += 1) {
      //     rowData.push (`${i}${j}`);
      //   }
      //   tableData.push (rowData);
      // }
      const widthArray =
        Platform.OS === 'ios' ? [50, 70, 90, 80, 80] : [50, 70, 100, 80, 80]
      return (
        <ScrollView style={styles.container}>
          <Text style={styles.title}>Thống Kê Người Dùng </Text>

          <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
            <Row
              data={this.state.tableHead}
              style={styles.head}
              textStyle={styles.text}
              //   widthArr={widthArray}
            />
            <Rows
              data={this.state.tableData}
              textStyle={styles.text}
              //   widthArr={widthArray}
            />
          </Table>
        </ScrollView>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: '#fff',
    paddingBottom: 20
  },
  head: {
    height: 40,
    backgroundColor: '#f1f8ff'
  },
  text: {
    margin: 6,
  },
  title: {
    fontSize: 24,
    color: AppColors.black,
    marginBottom: 15,
    marginTop: 15,
    fontWeight: 'bold'
  },
  scrollTable: {
    height: 500
  },
  header: {
    height: 50,
    backgroundColor: '#537791'
  }
})
