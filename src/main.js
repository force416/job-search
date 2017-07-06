import Vue from 'vue';
import Vuex from 'vuex';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

import router from "./router/router.js";
import VueResource from 'vue-resource';
import AppComponent from './component/app.vue';

Vue.use(Vuex);
Vue.use(VueResource);
Vue.use(ElementUI);

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment: state => state.count++,
        decrement: state => state.count--
    }
})

const app = new Vue({
    el: "#app",
    template: '<app/>',
    store,
    router,
    components: {
        "app": AppComponent
    }
});