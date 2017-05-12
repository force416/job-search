import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardComponent from '../component/dashboardComponent.vue'
import ProfileComponent from '../component/profileComponent.vue'
import JobWallComponent from '../component/jobWallComponent.vue'

Vue.use(VueRouter)

// // webpack component lazy loading require.ensure
// const DashboardComponent = resolve => {
//     require.ensure([], () => {
//         resolve(require('../component/dashboardComponent.vue'))
//     }, 'dashboard')
// }

// // webpack component lazy loading require.ensure
// const ProfileComponent = resolve => {
//     require.ensure([], () => {
//         resolve(require('../component/profileComponent.vue'))
//     }, 'profile')
// }

const routes = [
    { path: '/dashboard/:userId', name: 'dashboard', component: DashboardComponent },
    { path: '/profile', name: 'profile', component: ProfileComponent },
    { path: '/job-wall', name: 'job-wall', component: JobWallComponent }
]

var vueRouter = new VueRouter({
    base: 'job-search',
    // mode: 'history',
    routes: routes
});

export default vueRouter