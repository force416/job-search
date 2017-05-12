/*<template>
    <div>
        <header-component></header-component>
        <div>
            <p>
                <router-link :to="{ name: 'dashboard', params: { userId: 123 }}">Go to Dashboard</router-link>
                <router-link :to="{ name: 'profile'}">Go to Profile</router-link>
            </p>
            <router-view></router-view>
        </div>
        <footer-component></footer-component>
    </div>
</template>*/

<template>
    <div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">首頁</el-menu-item>
            <!--<el-menu-item index="2">Dashboard</el-menu-item>-->
            <el-menu-item index="3">Job Wall</el-menu-item>
        </el-menu>
        <router-view></router-view>
    </div>
</template>


<script>

import Vue from 'vue';
import headerComponent from "./header.vue";
import footerComponent from "./footer.vue";
import router from "../router/router.js";

export default {
    data: function () {
        return {
            activeIndex: "1"
        }
    },
    components: {
        "header-component": headerComponent,
        "footer-component": footerComponent
    },
    methods: {
        handleSelect(key, keyPath) {
            if (key === '1') {
                router.push({ path: '/' });
            }
            else if (key === '2') {
                router.push({ name: 'dashboard', params: { userId: 123 } });
            }
            else if (key === '3') {
                router.push({ name: 'job-wall' });
            }
        }
    }
}

</script>