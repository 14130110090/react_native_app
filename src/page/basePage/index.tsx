import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import ViewModel from './viewModel';
import {observer} from 'mobx-react';
import BasePage from './basePage';

/**
 * 基础模版页，其他页面直接复制即可
 */
@observer
export default class NewPage extends BasePage {
  vm = new ViewModel();

  componentDidMount() {}

  render() {
    return <View style={styles.container}>基础页面</View>;
  }
}
