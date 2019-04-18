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
import { AppTabStyle } from '@app/config'

export default class MudSlideNewsAndInfoTab extends React.Component {
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
    url = `${apiURL}api/data_collection_support/mudslideinformation/`
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
      const itemData = item.mudslide_information_title
        ? item.surges_mudslide_information_title.toUpperCase()
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
    this.props.navigation.navigate('MudSlideNewsAndInfoDetail', {
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
        <View style={AppTabStyle.viewStyle}>
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
              console.log(item.mudslide_information_file)
              if (item.status === 0) {
                item.status = 'Đang Hoạt Động'
              } else if (item.status === 1) {
                item.status = 'Ngừng Hoạt Động'
              }
              return (
                <TouchableOpacity
                  onPress={this.clickedItemText.bind(this, item)}
                >
                  <View style={AppTabStyle.container}>
                    <Text style={AppTabStyle.textStyle}>
                      {''}
                      {item.mudslide_information_title} - {item.province__province_name}
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
