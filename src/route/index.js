import Vue from 'vue'
import Router from 'vue-router'

// @ root layout
import Layout from '@/components/layout/Layout';

// @Component
import HomePage from '@/views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: HomePage,
          name: 'HomePage'
        }
      ]
  }]
})
