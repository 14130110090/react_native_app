import {Navigation} from 'react-native-navigation';
import {GlobalImages} from 'src/global/images';

Navigation.events().registerAppLaunchedListener(() => {
   setRoot()
})

function setRoot() {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          children: [
            {
              stack: {
                children: [
                  {
                    component: {
                      id: 'WishListPage',
                      name: 'WishListPage',
                      options: {
                        topBar: {
                          title: {
                            text: '首页标题',
                          },
                          visible: true,
                          hideOnScroll: true,
                          // height: 100,
                        },
                        statusBar: {},
                        bottomTab: {
                          icon:GlobalImages.TAB_HOME_UP,
                          selectedIcon:GlobalImages.TAB_HOME_DOWN,
                          text: '首页',
                          fontSize: 20,
                        },
                      },
                    },
                  },
                ],
              },
            },
            {
              stack: {
                children: [
                  {
                    component: {
                      id: 'UserPage',
                      name: 'UserPage',
                      options: {
                        topBar: {
                          title: {
                            text: '我的',
                          },
                          visible: true,
                          hideOnScroll: true,
                          // height: 100,
                        },
                        statusBar: {},
                        bottomTab: {
                          icon:GlobalImages.TAB_CATEGORY_UP,
                          selectedIcon:GlobalImages.TAB_CATEGORY_DOWN,
                          text: '我的',
                          fontSize: 20,
                        },
                      },
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    });
  };

export default {
  setRoot,
};
