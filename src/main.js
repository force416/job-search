import Vue from 'vue';
import Vuex from 'vuex';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

import router from "./router/router.js";
import VueResource from 'vue-resource';
import AppComponent from './component/app.vue';
import store from './store/index.js';

Vue.use(VueResource);
Vue.use(ElementUI);

const app = new Vue({
    el: "#app",
    template: '<app/>',
    store : store,
    router : router,
    components: {
        "app": AppComponent
    }
});