<template>
    <div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">Job Wall</el-menu-item>
            <!--<el-menu-item index="2">Dashboard</el-menu-item>-->
        </el-menu>
        <router-view></router-view>
    </div>
</template>


<script>

import Vue from 'vue';
import router from "../router/router.js";

export default {
    data: function () {
        return {
            activeIndex: "1"
        }
    },
    components: {
        
    },
    methods: {
        handleSelect: function (key, keyPath) {
            if (key === '1') {
                router.push({ name: 'job-wall' });
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