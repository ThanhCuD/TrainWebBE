import Vue from 'vue'
import Router from 'vue-router'
import Slide from '@/components/Slide'
import Api from '@/components/Api'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Slide',
      name: 'Slide',
      component: Slide
    },
    {
      path: '/api',
      name: 'Api',
      component: Api
    }
  ]
})
