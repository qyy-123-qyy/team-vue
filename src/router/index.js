import Vue from 'vue'
import Router from 'vue-router'
import login from '@/view/qyy/login'
import regist from '@/view/qyy/regist'
import index from '@/view/qyy/index'
import fabu from '@/view/fjl/fabu'
import xuqiu from '@/view/fjl/xuqiu'
import xiangqing2 from '@/view/fjl/xiangqing2'
import dlist from '@/view/fjl/dlist'
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
    {
      path: '/fabu',
      name: 'fabu',
      component:fabu
    }
    ,
    {
      path: '/xuqiu',
      name: 'xuqiu',
      component:xuqiu
    } ,
    {
      path: '/xiangqing2',
      name: 'xiangqing2',
      component:xiangqing2
    },
    {
      path: '/dlist',
      name: 'dlist',
      component:dlist
    }
  ]
})
