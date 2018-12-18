import Vue from "vue";
import Router from "vue-router";

import MSite from './views/MSite/MSite.vue'
import Order from './views/Order/Order.vue'
import Search from './views/Search/Search.vue'
import Profile from './views/Profile/Profile.vue'

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/msite',
      component: MSite
    },
    {
      path:'/order',
      component: Order
    },
    {
      path:'/search',
      component: Search
    },
    {
      path:'/profile',
      component: Profile
    },
    {
      path:'/',
      redirect: '/msite'
    },
  ]
});
