import Model from './model';
import {computed, action} from 'mobx';
import { Navigation } from 'react-native-navigation';
import { RouteManage } from 'src/manage';
import { GotoPage } from 'src/global/func';

export default class ViewModel {
  model = new Model();

  constructor() {}

  @action.bound
  onClickButton(){
    // GotoPage("PayPage",{ds:"ddd"});
    // Navigation.push("UserPage", {
    //   component: {
    //     name: 'PayPage'
    //   }
    // })
    RouteManage.GotoPage("UserPage","PayPage","ds",{ds:"dfsa"})
  }

  @computed get dataList() {
    return this.model.dataList;
  }
}
