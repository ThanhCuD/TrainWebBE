import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Api from '@/components/Api'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld1',
      component: HelloWorld
    },
    {
      path: '/api',
      name: 'Api',
      component: Api
    }
  ]
})
