import Model from './model';
import {computed} from 'mobx';

export default class ViewModel {
  model = new Model();

  constructor() {}

  @computed get dataList() {
    return this.model.dataList;
  }
}
