import React from 'react';
import {
  Platform,
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
import AppTabStyle from '../../../config/AppTabStyle';
import AppColors from '../../../config/AppColors';
import {SearchBar, ListItem} from 'react-native-elements';
import {apiURL} from '@app/apiURL';
import Icon from 'react-native-vector-icons/Ionicons';
import ListViewItemSeparator from '../../../components/ListViewItemSeparator';

export default class WarningInfoListScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam ('title', 'Tin chi tiết'),
      // header: null
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
    let url = `${apiURL}api/active_category/warnings/?format=json`
    return fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.results
        },function () {
          this.arrayHolder = responseJson.results;
        });
      })
      .catch(error => {
        console.log(error);
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
      const itemData = item.warning_title
        ? item.warning_title.toUpperCase ()
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
    this.props.navigation.navigate ('WarningInfoDetail', {item: clickedItem});
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
        containerStyle={{backgroundColor: AppColors.primary}}
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
            keyExtractor={(x, i) => i.toString ()}
            extraData={this.state}
            renderItem={({item}) => {
              if (item.status === 0) {
                item.status = 'Đang Hoạt Động';
              } else {
                item.status = 'Ngừng Hoạt Động';
              }

              return (
                <ListItem
                  leftIcon={icon}
                  title={item.warning_title}
                  titleStyle={AppTabStyle.textStyle}
                  subtitle={`${item.type_news} - ${item.status}`}
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

