import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import mcart from '@/components/mcart'
import maddress from "@/components/maddress";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mcart',
      component: mcart
    },
    {
      path: '/maddress',
      name: 'maddress',
      component: maddress
    }
  ]
})
