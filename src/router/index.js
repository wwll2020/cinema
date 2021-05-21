import Vue from 'vue'
import VueRouter from 'vue-router'
import Film from '../views/Film.vue'
import City from '../views/City.vue'

import Cinema from '../views/Cinema.vue'
import Search from '../views/Search.vue'
// import Center from '../views/Center.vue'
import Detail from '../views/Detail'
// import Login from '../views/Login'

import Nowplaying from '../views/film/Nowplaying'
import Comingsoon from '../views/film/Comingsoon'

Vue.use(VueRouter) // 注册模块，已经全局组件 router-view

const routes = [
  {
    path: '/film',
    component: Film,
    // 嵌套路由
    children: [
      {
        path: 'nowplaying',
        component: Nowplaying
      },
      {
        path: '/film/comingsoon',
        component: Comingsoon
      },
      {
        path: '',
        redirect: '/film/nowplaying'
      }
    ]
  },
  {
    path: '/city',
    component: City
  },
  {
    path: '/cinema',
    component: Cinema
  },
  {
    path: '/cinema/search',
    component: Search
  },
  {
    path: '/center',
    component: () => import(/* webpackChunkName: "group-foo" */'../views/Center')
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "group-foo" */'../views/Login.vue')
  },
  // {
  //   path: '/detail/:myid', //动态路由
  //   component: Detail,
  //   name:'detailName'
  // },
  {
    path: '/detail',
    component: Detail
  },
  {
    path: '*',
    redirect: '/film'
  }
]

const router = new VueRouter({
  mode: 'history', // history---/home, hash---#/home
  // base: process.env.BASE_URL,
  routes
})

// 全局路由守卫
router.beforeEach((to, from, next) => {
  const auth = ['/center', '/order', '/money', 'card']
  if (auth.includes(to.fullPath)) {
    // console.log('验证的token');
    if (!localStorage.getItem('token')) {
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
