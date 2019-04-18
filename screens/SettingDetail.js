import React from 'react';
import { StyleSheet } from 'react-native';
import {
  View,
  Text,
} from 'react-native';
import { AppColors } from '@app/config';

export default class SettingDetailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('setting', 'Tin chi tiết'),
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Setting Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.primary,
    flex: 1,
    marginTop: 30,
    padding: 10,
  },
  title: {
    color: AppColors.black,
    fontSize: 40,
    fontWeight: 'bold',
  },
});
