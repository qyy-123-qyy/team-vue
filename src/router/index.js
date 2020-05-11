import Vue from 'vue'
import Router from 'vue-router'
import login from '@/view/qyy/login'
import regist from '@/view/qyy/regist'
import index from '@/view/qyy/index'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      redirect:"/login",
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/regist',
      name: 'regist',
      component: regist
    },
    {
      path: '/index',
      name: 'index',
      component:index
    },
  ]
})
