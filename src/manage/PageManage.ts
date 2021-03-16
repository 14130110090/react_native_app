import {Navigation} from 'react-native-navigation';
import Pages from 'src/page/index';

const autoRegisterPages=()=>{
  Object.keys(Pages).map((key) => {
    if (key) {
      Navigation.registerComponent(key, () => Pages[key]);
    }
  });
}

export {
  autoRegisterPages,
};
