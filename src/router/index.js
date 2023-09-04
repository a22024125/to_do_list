import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TodoList from '@/components/TodoList' // 导入TodoList.vue 组件

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'TodoList', // 给路由命名
      component: TodoList // 将TodoList.vue 添加为一个路由规则
    }
  ]
})
