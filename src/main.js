import Vue from 'vue';
import App from '@/App.vue';
import router from '@/route';
import store from '@/store';

import axios from 'axios';
// @Axios config
axios.defaults.baseURL = 'http://192.168.1.112:3000/api'
axios.defaults.headers.common['Authorization'] = 'Housing_Web'
axios.defaults.headers.get['Accepts'] = 'application/json'

// @Ant vue design
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.min.css";

// @Progress bar
import VueProgressBar from "vue-progressbar";
const progressOptions = {
  color: "#eb2f06",
  failedColor: "#44bd32",
  thickness: "3px",
  transition: {
    speed: "0.2s",
    opacity: "0.6s",
    termination: 300
  },
  autoFinish: false,
  autoRevert: true,
  inverse: false
};

// @Lazy loading
import VueLazyload from 'vue-lazyload';
const lazyOptions = {
  preLoad: 1.3,
  error: 'https://media.tenor.com/images/3c1e99287e04732354ce044e02a26e57/tenor.gif',
  loading: 'http://www.sneakypetes.co.uk/wp-content/plugins/sumome/images/sumome-loading.gif',
  attempt: 1,
  listenEvents: [ 'scroll' ]
}

// @Vue config
Vue.use(Antd);
Vue.use(VueProgressBar, progressOptions);
Vue.use(VueLazyload, lazyOptions)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
