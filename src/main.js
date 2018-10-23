// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入类库
import creatUser from '@/util/creatUser'
import userMap from '@/util/userMap'

Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  // 只调用父类
  let creat = new creatUser('www')
  creat.sayName()
  // 调用了继承了父类的子类
  let maps = new userMap('jack')
  maps.say()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
