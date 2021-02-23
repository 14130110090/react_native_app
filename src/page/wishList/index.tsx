import React from 'react';
import {View,Text} from 'react-native';
import styles from './styles';
import ViewModel from './viewModel';
import {observer} from 'mobx-react';
import BasePage from '../basePage/basePage';

/**
 * 许愿页
 */
@observer
export default class WishListPage extends BasePage {
  vm = new ViewModel();

  static pageName = "WishListPage";
  static title = ""; 

  componentDidMount() {}

  render() {
    return <Text style={styles.container}>基础页面</Text>;
  }
}
