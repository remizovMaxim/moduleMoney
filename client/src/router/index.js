import Vue from 'vue'
import Router from 'vue-router'
import Generator from '@/components/Generator'
import List from '@/components/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Generator',
      component: Generator
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
