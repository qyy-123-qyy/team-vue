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
import setting from '@/view/wt//setting'
import fabu from '@/view/fjl/fabu'
import xuqiu from '@/view/fjl/xuqiu'
import xiangqing2 from '@/view/fjl/xiangqing2'
import dlist from '@/view/fjl/dlist'
import yunduan from '@/view/fjl/yunduan'
import qianyue from '@/view/fjl/qianyue'
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
    {
      path: '/setting',
      name: 'setting',
      component:setting
    },
    {
      path: '/fabu',
      name: 'fabu',
      component:fabu
    },
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
    },
    {
      path: '/yunduan',
      name: 'yunduan',
      component:yunduan
    },
    {
      path: '/qianyue',
      name: 'qianyue',
      component:qianyue
    },{
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
