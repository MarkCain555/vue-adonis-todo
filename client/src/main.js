import './plugins/vuetify';

import Vue from 'vue';
import App from './App.vue';
import Panel from './components/Panel';
import router from './router';
import store from './store/index';

Vue.config.productionTip = false;

Vue.component('Panel', Panel);

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');
