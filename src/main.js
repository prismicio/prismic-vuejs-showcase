import Vue from 'vue';
import PrismicVue from 'prismic-vue';
import { Setup as PrismicSetup } from '@/components/prismic/Prismic';

import App from './App.vue';
import router from './router';
import DefaultLayout from './views/DefaultLayout.vue';

Vue.component('default-layout', DefaultLayout);

Vue.config.productionTip = false;

Vue.use(PrismicVue, PrismicSetup);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
