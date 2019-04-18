import React from 'react'
import {
  Platform,
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions
} from 'react-native'
import { AppColors } from '@app/config'
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell
} from 'react-native-table-component'
import { ScrollView } from 'react-native-gesture-handler'

export default class WarningInfoDetailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', 'Tin chi tiết')
    }
  }
  render () {
    const WarningInfoData = [
      ['Tiêu đề', this.props.navigation.state.params.item.warning_title],
      ['Nội dung', this.props.navigation.state.params.item.description],
      ['Loại tin', this.props.navigation.state.params.item.type_news],
      ['Trạng thái', this.props.navigation.state.params.item.status]
    ]
    return (
      <ScrollView styles={{ flex: 1 }}>
        <View styles={styles.container2}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              padding: 10
            }}
          >
            Chi tiết cảnh báo
          </Text>
          <Table
            borderStyle={{
              borderWidth: 2,
              borderColor: '#c8e1ff',
              paddingLeft: 10
            }}
          >
            <Rows
              data={WarningInfoData}
              textStyle={styles.subContentText}
              widthArr={[100, Dimensions.get('window').width - 110]}
            />
          </Table>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    alignItems:'center',
		justifyContent: 'center',
		flex: 1,
		backgroundColor: 'white',
		marginTop: Platform.OS == 'ios' ? 0 : 20
    // padding: 10,
    // paddingBottom: 20
  },
  container: {
    backgroundColor: AppColors.primary,
    flex: 1,
    padding: 10,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    borderBottomWidth: 0.3
  },
  container2:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
  item: {
    margin: 5,
    flexDirection: 'column',
    borderBottomColor: '#080808',
    borderBottomWidth: 0.3
    // paddingTop: 10
  },
  subItem: {
    margin: 5,
    flexDirection: 'row'
  },
  title: {
    color: AppColors.black,
    fontSize: 40,
    fontWeight: 'bold'
  },
  created_at: {
    marginTop: 10,
    color: AppColors.grey,
    fontSize: 15
  },
  content: {
    marginTop: 15,
    color: AppColors.black,
    fontSize: 22
  },
  img: {
    width: 125,
    height: 110,
    marginRight: 5,
    marginLeft: 5
  },
  backBtn: {
    color: AppColors.button,
    backgroundColor: AppColors.buttonText
  },
  text: {
    color: AppColors.black,
    fontSize: 16,
    marginTop: 5,
    marginLeft: 5
    // width: Dimensions.get("window").width - 200
  },
  contentText: {
    color: 'black',
    fontSize: 16,
    padding: 10,
    fontWeight: '700'
  },
  subContentText: {
    color: 'black',
    fontSize: 14,
    padding: 15
  },
  subContentTextV2: {
    color: 'black',
    fontSize: 14,
    width: Dimensions.get('window').width - 120,
    margin: 9
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: AppColors.grey
  },
  headText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
    paddingTop: 20
  },
  head: {
    height: 40,
    backgroundColor: '#f1f8ff'
  }
})
