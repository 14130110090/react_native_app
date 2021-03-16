import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './styles';
import ViewModel from './viewModel';
import {observer} from 'mobx-react';
import BasePage from '../basePage/basePage';

/**
 * 基础模版页，其他页面直接复制即可
 */
@observer
export default class UserPage extends BasePage {
  vm = new ViewModel();

 static options={
    statusBar: {
      backgroundColor: '#4d089a'
    },
    topBar: {
      title: {
        color: 'white'
      },
      backButton: {
        color: 'white'
      },
      background: {
        color: '#4d089a'
      }
    },
    bottomTab: {
      fontSize: 14,
      selectedFontSize: 14
    }
  }

  componentDidMount() {}

  render() {
    const {onClickButton} = this.vm;
    return (
      <View style={styles.container}>
        <Text>首页</Text>
        <Button title="跳转" onPress={onClickButton} />
      </View>
    );
  }
}
