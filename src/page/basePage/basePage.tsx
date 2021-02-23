import React, {Component} from 'react';
import {BackHandler, Platform, View} from 'react-native';

/**
 * @author
 * @description 基础页
 * @class
 * @extends {Component}
 */
export default class BasePage extends Component {
  static androidStatusBar = {
    translucent: true,
    backgroundColor: 'FFFFFF',
    barStyle: 'dark-content',
  };

  constructor(props) {
    super(props);

    if (Platform.OS === 'android') {
      BackHandler.addEventListener(
        'hardwareBackPress',
        this.handlerAndroidBack,
      );
    }
  }

  navigationButtonPressed(event: any) {
    if (event.buttonId === 'back') {
      this.handlerBack();
    }
  }

  handlerAndroidBack = () => {
    return this.handlerBack();
  };

  handlerBack() {
    if (Platform.OS === 'ios') {
      return;
    } else {
    }
    return Platform.OS === 'android';
  }

  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        this.handlerAndroidBack,
      );
    }
  }

  _render() {
    return <View />;
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
        }}>
        {this._render()}
      </View>
    );
  }
}
