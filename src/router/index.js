import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import OneLogin from '@/components/OneLogin/OneLogin'
import OneLoginQuick from '@/components/OneLogin/OneLoginQuick'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'OneLogin',
      component: OneLogin,
      children: [{
        path: 'register',
        name: 'register',
        component: OneLoginQuick
      }]
    }
  ]
})