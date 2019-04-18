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

export default class FloodLevelListScreen extends React.Component {
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
    let url = `${apiURL}api/active_category/floods/?format=json`
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
      const itemData = item.flood_name
        ? item.flood_name.toUpperCase ()
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
    this.props.navigation.navigate ('FloodLevelsDetail', {item: clickedItem});
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
                  title={item.flood_name}
                  titleStyle={AppTabStyle.textStyle}
                  subtitle={item.status}
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

// import React from 'react'
// import {
//   Platform,
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   ActivityIndicator,
//   TouchableOpacity,
//   Dimensions,
//   Alert
// } from 'react-native'
// import { AppColors } from '@app/config'
// import { SearchBar } from 'react-native-elements'
// import { apiURL } from '@app/apiURL';

// export default class FloodLevelsListScreen extends React.Component {
//   static navigationOptions = ({ navigation }) => {
//     return {
//       title: navigation.getParam('title', 'Tin chi tiết')
//     }
//   }

//   constructor (props) {
//     super(props)
//     this.state = {
//       isLoading: true,
//       dataSource: [],
//       error: null,
//       tableHead: ['Tiêu đề', 'Loại tin', 'Trạng thái']
//     }
//   }

//   componentDidMount () {
//     url = `${apiURL}api/active_category/floods/?format=json`
//     return fetch(url)
//       .then(response => response.json())
//       .then(responseJson => {
//         this.setState(
//           {
//             isLoading: false,
//             dataSource: responseJson.results
//           },
//           function () {
//             this.arrayHolder = responseJson.results
//           }
//         )
//       })
//       .catch(error => {
//         console.log(error)
//       })
//   }

//   search = text => {
//     console.log(text)
//   }

//   clear = () => {
//     this.search.clear()
//   }

//   SearchFilterFunction (text) {
//     const newData = this.arrayHolder.filter(function (item) {
//       const itemData = item.flood_name
//         ? item.flood_name.toUpperCase()
//         : ''.toUpperCase()
//       const textData = text.toUpperCase()
//       return itemData.indexOf(textData) > -1
//     })
//     this.setState({
//       dataSource: newData,
//       search: text
//     })
//   }

//   clickedItemText (clickedItem) {
//     this.props.navigation.navigate('FloodLevelsDetail', { item: clickedItem })
//     console.log(clickedItem)
//   }

//   ListViewItemSeparator = () => {
//     // Item separator view
//     return (
//       <View
//         style={{ height: 0.3, backgroundColor: '#080808', width: '100%' }}
//       />
//     )
//   }

//   render () {
//     if (this.state.isLoading) {
//       return (
//         <View style={{ flex: 1, padding: 20 }}>
//           <ActivityIndicator />
//         </View>
//       )
//     } else {
//       return (
//         <View style={styles.viewStyle}>
//           <SearchBar
//             round
//             searchIcon={{ size: 24 }}
//             onChangeText={text => this.SearchFilterFunction(text)}
//             onClear={text => this.SearchFilterFunction('')}
//             placeholder='Tìm kiếm cảnh báo ở đây...'
//             value={this.state.search}
//           />
//           <FlatList
//             ItemSeparatorComponent={this.ListViewItemSeparator}
//             placeholderTextColor
//             style={{ flex: 1 }}
//             data={this.state.dataSource}
//             horizontal={false}
//             keyExtractor={(x, i) => i.toString()}
//             extraData={this.state}
//             renderItem={({ item }) => {
//               if (item.status === 0) {
//                 item.status = 'Đang Hoạt Động'
//               } else if (item.status === 1) {
//                 item.status = 'Ngừng Hoạt Động'
//               }
//               return (
//                 <TouchableOpacity
//                   onPress={this.clickedItemText.bind(this, item)}
//                 >
//                   <View style={styles.container}>
//                     <Text style={styles.textStyle}>
//                       {''}
//                       {''}
//                       {`${item.flood_name} - ${item.year_occurs} - ${
//                         item.status
//                       }`}
//                       {''}
//                       {''}
//                     </Text>
//                   </View>
//                 </TouchableOpacity>
//               )
//             }}
//           />
//         </View>
//       )
//     }
//   }
// }

// const styles = StyleSheet.create({
//   viewStyle: {
//     justifyContent: 'center',
//     flex: 1,
//     backgroundColor: '#ffffff'
//   },
//   item: {
//     flex: 1,
//     alignSelf: 'stretch'
//   },
//   textStyle: {
//     padding: 10,
//     fontSize: 16,
//     height: 44
//   },
//   loader: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff'
//   },
//   list: {
//     paddingVertical: 5,
//     margin: 3,
//     flexDirection: 'row',
//     backgroundColor: '#192338',
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     zIndex: -1
//   },
//   lightText: {
//     color: '#f7f7f7',
//     width: 200,
//     paddingLeft: 15,
//     fontSize: 12
//   },
//   numberBox: {
//     position: 'absolute',
//     bottom: 75,
//     width: 30,
//     height: 30,
//     borderRadius: 15,
//     left: 330,
//     zIndex: 3,
//     backgroundColor: '#e3e3e3',
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   title: {
//     fontWeight: 'bold',
//     fontSize: 16,
//     padding: 10,
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   number: { fontSize: 14, color: '#000' },
//   selected: { backgroundColor: '#FA7B5F' },
//   container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
//   head: { height: 40, backgroundColor: '#808B97' },
//   text: { margin: 6 },
//   row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
//   btn: { width: 58, height: 18, backgroundColor: '#78B7BB', borderRadius: 2 },
//   btnText: { textAlign: 'center', color: '#fff' }
// })
