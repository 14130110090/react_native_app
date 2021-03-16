import {Platform} from 'react-native';
// 应该对ios平台和android平台使用不同的图片资源，现在不做区分，只使用Andriod
export const GlobalImages = {
  TAB_HOME_UP:
    Platform.OS === 'ios'
      ? require('../assets/tab/bar_home_up.png')
      : require('../assets/tab/bar_home_up.png'),
  TAB_HOME_DOWN:
    Platform.OS === 'ios'
      ? require('../assets/tab/bar_home_up.png')
      : require('../assets/tab/bar_home_down.png'),
  TAB_CATEGORY_UP:
    Platform.OS === 'ios'
      ? require('../assets/tab/bar_home_up.png')
      : require('../assets/tab/bar_classification_up.png'),
  TAB_CATEGORY_DOWN:
    Platform.OS === 'ios'
      ? require('../assets/tab/bar_home_up.png')
      : require('../assets/tab/bar_classification_down.png'),
  TAB_ME_UP:
    Platform.OS === 'ios'
      ? require('../assets/tab/bar_home_up.png')
      : require('../assets/tab/bar_me_up.png'),
  TAB_ME_DOWN:
    Platform.OS === 'ios'
      ? require('../assets/tab/bar_home_up.png')
      : require('../assets/tab/bar_me_down.png'),
};
