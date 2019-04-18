import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native'

import ListViewSeparator from '../../../components/ListViewItemSeparator'
import { SearchBar } from 'react-native-elements'
import { apiURL } from '@app/apiURL'

export default class RainNewsAndInfoTab extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    }
  }

  constructor (props) {
    super(props)
    this.state = {
      isLoading: true,
      dataSource: [],
      error: null
    }
  }

  componentDidMount () {
    url = `${apiURL}api/data_collection_support/raininformation/`
    return fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson
          },
          function () {
            this.arrayHolder = responseJson
          }
        )
      })
      .catch(error => {
        console.log(error)
      })
  }

  search = text => {
    console.log(text)
  }

  clear = () => {
    this.search.clear()
  }

  SearchFilterFunction (text) {
    const newData = this.arrayHolder.filter(function (item) {
      const itemData = item.rain_information_title
        ? item.rain_information_title.toUpperCase()
        : ''.toUpperCase()
      const textData = text.toUpperCase()
      return itemData.indexOf(textData) > -1
    })
    this.setState({
      dataSource: newData,
      search: text
    })
  }

  clickedItemText (clickedItem) {
    this.props.navigation.navigate('RainNewsAndInfoDetail', {
      item: clickedItem
    })
    console.log(clickedItem)
  }
  render () {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    } else {
      return (
        <View style={styles.viewStyle}>
          <SearchBar
            round
            searchIcon={{ size: 24 }}
            onChangeText={text => this.SearchFilterFunction(text)}
            onClear={text => this.SearchFilterFunction('')}
            placeholder='Tìm kiếm ở đây...'
            value={this.state.search}
          />
          <FlatList
            ItemSeparatorComponent={ListViewItemSeparator}
            placeholderTextColor
            style={{ flex: 1 }}
            data={this.state.dataSource}
            horizontal={false}
            keyExtractor={(x, i) => i.toString()}
            extraData={this.state}
            renderItem={({ item }) => {
              if (item.status === 0) {
                item.status = 'Đang Hoạt Động'
              } else if (item.status === 1) {
                item.status = 'Ngừng Hoạt Động'
              }
              return (
                <TouchableOpacity
                  onPress={this.clickedItemText.bind(this, item)}
                >
                  <View style={styles.container}>
                    <Text style={styles.textStyle}>
                      {''}
                              {item.rain_information_title} - {item.province__province_name}
                      {''}
                    </Text>
                  </View>
                </TouchableOpacity>
              )
            }}
          />
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#ffffff'
  },
  item: {
    flex: 1,
    alignSelf: 'stretch'
  },
  textStyle: {
    padding: 10,
    fontSize: 16,
    height: 44
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  list: {
    paddingVertical: 5,
    margin: 3,
    flexDirection: 'row',
    backgroundColor: '#192338',
    justifyContent: 'flex-start',
    alignItems: 'center',
    zIndex: -1
  },
  lightText: {
    color: '#f7f7f7',
    width: 200,
    paddingLeft: 15,
    fontSize: 12
  },
  numberBox: {
    position: 'absolute',
    bottom: 75,
    width: 30,
    height: 30,
    borderRadius: 15,
    left: 330,
    zIndex: 3,
    backgroundColor: '#e3e3e3',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  number: { fontSize: 14, color: '#000' },
  selected: { backgroundColor: '#FA7B5F' },
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#808B97' },
  text: { margin: 6 },
})
