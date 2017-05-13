import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardComponent from '../component/dashboardComponent.vue'
import ProfileComponent from '../component/profileComponent.vue'
import JobWallComponent from '../component/jobWallComponent.vue'
import config from '../config/config.js';

Vue.use(VueRouter)

const routes = [
    { path: '/dashboard/:userId', name: 'dashboard', component: DashboardComponent },
    { path: '/profile', name: 'profile', component: ProfileComponent },
    { path: '/', name: 'job-wall', component: JobWallComponent }
]

var vueRouter = new VueRouter({
    base: config.ASSET_PUBLIC_PATH,
    // mode: 'history',
    routes: routes
});

export default vueRouter