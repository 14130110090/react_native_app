import {Navigation} from 'react-native-navigation';
import Pages from 'src/page/index';

function autoRegisterPages() {
  Object.keys(Pages).map((key) => {
    if (key) {
      Navigation.registerComponent(key, () => Pages[key]);
    }
  });
}

export default {
  autoRegisterPages,
};
