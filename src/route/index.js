import Vue from 'vue'
import Router from 'vue-router'

// @Root layout app
import Layout from '@/views/app/layout/Layout';

// @Component
import HomePage from '@/views/app/Home'
import User from '@/views/app/User';
import Post from '@/views/app/PostPage/PostPage';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: HomePage,
          name: 'HomePage'
        },
        {
          path: '/user',
          component: User,
          name: 'User'
        },
        {
          path: '/post',
          component: Post,
          name: 'PostPage'
        }
      ]
    } 
  ]
})
