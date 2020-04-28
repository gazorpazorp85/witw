import Vue from 'vue';
import VueRouter from 'vue-router';

import NProgress from 'nprogress';

import Home from '@/views/Home';
import CountryDetails from '@/views/CountryDetails.vue';
import NotFound from '@/views/NotFound';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true
  },
  {
    path: '/country/:code',
    component: CountryDetails,
    props: true
  },
  {
    path: '/404',
    name: 'not-found',
    component: NotFound,
    props: true
  },
  {
    path: '*',
    redirect: { name: 'not-found', params: { resource: 'page' } }
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((routeTo, routeFrom, next) => {
  NProgress.start();
  next();
})

router.afterEach(() => {
  NProgress.done();
})

export default router