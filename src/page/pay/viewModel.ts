import Model from './model';
import {computed, action} from 'mobx';
import { Navigation } from 'react-native-navigation';

export default class ViewModel {
  model = new Model();

  constructor() {}

  @action.bound
  onClickButton(){
    
    Navigation.push("WishListPage", {
      component: {
        name: 'WishListPage'
      }
    })
  }

  @computed get dataList() {
    return this.model.dataList;
  }
}
