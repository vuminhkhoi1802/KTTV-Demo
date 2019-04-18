import React from 'react';
import { StyleSheet } from 'react-native';
import {
  View,
  Dimensions,
  ListView,
  TouchableHighlight,
  Text,
} from 'react-native';
import { AppColors } from '@app/config';

export default class SettingsCameraScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', 'Tin chi tiết'),
    };
  };
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    this.state = {
      dataSource: ds.cloneWithRows([
        'Camera 1',
        'Camera 2',
        'Camera 3',
        'Camera 4',
        'Camera 5',
        'Camera 6',
      ]),
    };
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={data => (
          <TouchableHighlight onPress={() => navigate('Settings')}>
            <View style={styles.item}>
              <Text style={styles.text}>{data}</Text>
            </View>
          </TouchableHighlight>
          )}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.primary,
    flex: 1
  },
  item: {
    margin: 10,
    flexDirection: 'row',
  },
  img: {
    width: 175,
    height: 110,
    marginRight: 5,
    marginLeft: 5,
  },
  text: {
    color: AppColors.black,
    fontSize: 22,
    marginTop: 5,
    marginLeft: 5,
    width: Dimensions.get('window').width - 200,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: AppColors.grey,
  }
});
