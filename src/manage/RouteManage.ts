import {Navigation} from 'react-native-navigation';
import {StatusBar, Platform} from 'react-native';

//跳转页面
function GotoPage(
  componentId,
  screenName,
  title,
  passProps,
  animation = true,
  success = () => {},
) {
  if (!screenName || screenName.length === 0) {
    return;
  }
  // 设置需求隐藏导航栏的页面
  let topBarVisible = true;
  //  关闭切换动画
  animation = false;
  // 设置状态栏颜色
  let statusBarStyle = 'dark';

  Navigation.push(componentId, {
    component: {
      name: screenName,
      passProps: passProps,
      options: {
        topBar: {
          title: {
            text: title,
            alignment: 'center',
            color: 'black',
            fontSize: 18,
            fontWeight: 'bold',
          },
          topMargin:
            Platform.OS === 'android' && topBarVisible
              ? StatusBar.currentHeight
              : 0,
          visible: topBarVisible,
          height: topBarVisible ? 44 : 0,
        },
        bottomTabs: {
          visible: false,
          drawBehind: true,
        },
        animations: {
          push: {
            enabled: animation,
          },
        },
        layout: {
          orientation: ['portrait'],
        },
      },
    },
  })
    .then(() => {})
    .catch((error) => {});
}

export default {
  GotoPage,
};
