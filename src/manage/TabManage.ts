import {Platform, AsyncStorage} from 'react-native';
import {Navigation} from 'react-native-navigation';

// const TAB_CONFIG_KEY = 'TAB_CONFIG_KEY';
// const TEST_ENABLED = false;

// let homeTabConfigs = [];
// let homeTabBConfigs = [];
// let homeTabCConfigs = [];

// function tabConfigInit() {
//   const HOME_OPTIONS = configStack({
//     id: 'WishListPage',
//     pageName: 'WishListPage',
//     pageTitle: 'WishListPage',
//     topBarVisible: false,
//     text: '首页',
//     icon: '',
//     selectedIcon: '',
//     passProps: {hiddenBack: true, isTab: true},
//   });

//   // 百亿补贴
//   homeTabConfigs = [HOME_OPTIONS];
// }

// // about navigation
// function configStack(props = {}) {
//   const visibleProps = true ? {} : {visible: false, height: 0};
//   return {
//     stack: {
//       children: [
//         {
//           component: {
//             id: 'WishListPage',
//             name: 'WishListPage',
//             options: {
//               topBar: {
//                 title: {
//                   text: 'WishListPage',
//                 },
//                 ...visibleProps,
//               },
//               statusBar: {
//                 ...Platform.select({
//                   ios: {
//                     style: {},
//                   },
//                 }),
//               },
//             },
//             passProps: {},
//           },
//         },
//       ],
//       options: {
//         bottomTab: {...props},
//       },
//     },
//   };
// }

function setRoot() {
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: 'WishListPage',
              },
            },
          ],
        },
      },
    });
  });
}

export default {
  setRoot,
};
