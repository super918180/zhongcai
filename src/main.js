import Vue from 'vue'
import store from '@/store'
import App from '@/App'
import MpvueRouterPatch from 'mpvue-router-patch'

Vue.config.productionTip = false
Vue.use(MpvueRouterPatch)

const app = new Vue({
  store,
  ...App
})
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    pages: [
      'pages/news/list'
    ], // Will be filled in webpack
    window: {
      backgroundTextStyle: 'light',
      backgroundColor: '#44c050',
      backgroundColorTop: '#44c050',
      navigationBarBackgroundColor: '#44c050',
      navigationBarTitleText: '微果酷坊+',
      navigationBarTextStyle: 'white'
    },
    tabBar: {
      color: '#999999',
      selectedColor: '#44c050',
      backgroundColor: '#fff',
      borderStyle: 'black',
      list: [{
        pagePath: 'pages/home/index',
        text: '首页',
        iconPath: 'static/assets/tabBar/home.png',
        selectedIconPath: 'static/assets/tabBar/home-active.png'
      }, {
        pagePath: 'pages/category/index',
        text: '分类',
        iconPath: 'static/assets/tabBar/category.png',
        selectedIconPath: 'static/assets/tabBar/category-active.png'
      }, {
        pagePath: 'pages/cart/index',
        text: '购物车',
        iconPath: 'static/assets/tabBar/cart.png',
        selectedIconPath: 'static/assets/tabBar/cart-active.png'
      }, {
        pagePath: 'pages/order/index',
        text: '订单',
        iconPath: 'static/assets/tabBar/order.png',
        selectedIconPath: 'static/assets/tabBar/order-active.png'
      }, {
        pagePath: 'pages/mine/index',
        text: '我的',
        iconPath: 'static/assets/tabBar/mine.png',
        selectedIconPath: 'static/assets/tabBar/mine-active.png'
      }]
    }
  }
}
