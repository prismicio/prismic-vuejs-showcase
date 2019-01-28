import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import Products from './views/Products.vue';
import Product from './views/Product.vue';
import BlogHome from './views/BlogHome.vue';
import BlogPost from './views/BlogPost.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { layout: 'default' },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Home,
    },
    {
      path: '/products',
      name: 'products',
      meta: { layout: 'default' },
      component: Products,
    },
    {
      path: '/products/:uid',
      name: 'product',
      meta: { layout: 'default' },
      component: Product,
    },
    {
      path: '/blog',
      name: 'blog',
      meta: { layout: 'default' },
      component: () => BlogHome,
    },
    {
      path: '/blog/:uid',
      name: 'blogpost',
      meta: { layout: 'default' },
      component: () => BlogPost,
    },
    {
      path: '*',
      name: 'notfound',
      component: () => import('./views/NotFound.vue'),
    },
  ],
});
