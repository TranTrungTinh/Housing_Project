import Vue from 'vue';
import App from '@/App.vue';
import router from '@/route';
import store from '@/store';

// @Ant vue design
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.min.css";

// @Vue config
Vue.use(Antd);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
