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
export default class PayPage extends BasePage {
  vm = new ViewModel();

  constructor(props) {
    super(props);
   console.log("传值了",props)
}

  componentDidMount() {}

  render() {
    const {onClickButton} = this.vm;
    return (
      <View style={styles.container}>
        <Text>跳转到新页面</Text>
        <Button title="跳转" onPress={onClickButton} />
      </View>
    );
  }
}
