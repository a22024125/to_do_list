// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import TodoList from './components/TodoList.vue' // 引入TodoList组件

Vue.config.productionTip = false

Vue.component('TodoList', TodoList) // 注册TodoList组件

console.log('main.js is running')

// new Vue({
//   render: h => h(App)
// }).$mount('#app')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
