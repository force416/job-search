import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

import router from "./router/router.js";
import VueResource from 'vue-resource';
import AppComponent from './component/app.vue';

Vue.use(VueResource);
Vue.use(ElementUI);

const app = new Vue({
    el: "#app",
    template: '<app/>',
    router,
    components: {
        "app": AppComponent
    }
});