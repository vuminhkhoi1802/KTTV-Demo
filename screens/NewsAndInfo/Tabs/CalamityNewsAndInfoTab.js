import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Platform,
} from 'react-native';
import apiURL from '../../../utils/apiURL';
import {SearchBar, ListItem} from 'react-native-elements';
import {AppTabStyle} from '@app/config';
import ListViewItemSeparator from '../../../components/ListViewItemSeparator';
import Icon from 'react-native-vector-icons/Ionicons';

export default class CalamityNewsAndInfoTab extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      header: null,
    };
  };

  constructor (props) {
    super (props);
    this.state = {
      isLoading: true,
      dataSource: [],
      error: null,
    };
  }

  componentDidMount () {
    url = apiURL + 'api/data_collection_support/calamity_information/';
    return fetch (url)
      .then (response => response.json ())
      .then (responseJson => {
        this.setState (
          {
            isLoading: false,
            dataSource: responseJson,
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

  search = text => {
    console.log (text);
  };

  clear = () => {
    this.search.clear ();
  };

  SearchFilterFunction (text) {
    const newData = this.arrayHolder.filter (function (item) {
      const itemData = item.calamity_information_title
        ? item.calamity_information_title.toUpperCase ()
        : ''.toUpperCase ();
      const textData = text.toUpperCase ();
      return itemData.indexOf (textData) > -1;
    });
    this.setState ({
      dataSource: newData,
      search: text,
    });
  }

  clickedItemText (clickedItem) {
    this.props.navigation.navigate ('CalamityNewsAndInfoDetail', {
      item: clickedItem,
    });
    console.log (clickedItem);
  }

  renderHeader = () => {
    return (
      <SearchBar
        round
        searchIcon={{size: 24}}
        onChangeText={text => this.SearchFilterFunction (text)}
        onClear={text => this.SearchFilterFunction ('')}
        placeholder="Tìm kiếm ở đây..."
        value={this.state.search}
        autoCorrect={false}
        containerStyle={{backgroundColor: '#00a8e0'}}
        lightTheme
      />
    );
  };

  render () {
    const icon = () => {
      return (
        <Icon
          name={
            Platform.OS === 'ios'
              ? 'ios-information-circle-outline'
              : 'md-information-circle-outline'
          }
          size={32}
          style={{color: '#00a8e0'}}
        />
      );
    };
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator />
        </View>
      );
    } else {
      return (
        <View style={AppTabStyle.viewStyle}>
          <FlatList
            ListHeaderComponent={this.renderHeader}
            ItemSeparatorComponent={ListViewItemSeparator}
            style={{flex: 1}}
            data={this.state.dataSource}
            extraData={this.state}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => {
              if (item.status === 0) {
                item.status = 'Đang Hoạt Động';
              } else {
                item.status = 'Ngừng Hoạt Động';
              }
              return (
                <ListItem
                  leftIcon={icon}
                  title={item.calamity_information_title}
                  titleStyle={AppTabStyle.textStyle}
                  subtitle={`${item.province__province_name} - ${item.status}`}
                  subtitleStyle={AppTabStyle.lightText}
                  onPress={this.clickedItemText.bind (this, item)}
                />
              );
            }}
          />
        </View>
      );
    }
  }
}
