import Vue from 'vue'
import Router from 'vue-router'
import login from '@/view/qyy/login'
import regist from '@/view/qyy/regist'
import index from '@/view/qyy/index'
import work_todo from '@/view/wt/work_todo'
import work from '@/view/wt//work'
import manage from '@/view/wt//manage'
import credit from '@/view/wt//credit'
import group from '@/view/wt//group'
import account from '@/view/wt//account'

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
      path: '/work_todo',
      name: 'work_todo',
      component:work_todo
    },
    {
      path: '/work',
      name: 'work',
      component:work
    },
    {
      path: '/manage',
      name: 'manage',
      component:manage
    },
    {
      path: '/credit',
      name: 'credit',
      component:credit
    },
    {
      path: '/group',
      name: 'group',
      component:group
    },
    {
      path: '/account',
      name: 'account',
      component:account
    },
  ]
})
