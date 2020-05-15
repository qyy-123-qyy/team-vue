import Vue from 'vue'
import Router from 'vue-router'
import login from '@/view/qyy/login'
import regist from '@/view/qyy/regist'
import index from '@/view/qyy/index'
import programmer from '@/view/qyy/programmer'
import resetpw from '@/view/qyy/resetpw'
import demand from '@/view/qyy/demand'




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
      path: '/resetpw',
      name: 'resetpw',
      component:resetpw
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
    {
      path: '/programmer',
      name: 'programmer',
      component:programmer
    },
    {
      path: '/demand',
      name: 'demand',
      component:demand
    },
  ]
})
