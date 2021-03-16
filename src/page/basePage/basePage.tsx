import React, {Component} from 'react';
import {BackHandler, Platform, View} from 'react-native';
import { NavigationComponent, Navigation } from 'react-native-navigation';

/**
 * @author
 * @description 基础页
 * @class
 * @extends {Component}
 */
export default class BasePage extends NavigationComponent {
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
      Navigation.pop("WishListPage");
      
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
