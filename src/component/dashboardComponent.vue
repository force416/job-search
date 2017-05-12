<template>
    <div>
        <p> this {{ name }} page !</p>
        <p> id: {{ $route.params.userId }} !</p>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    data: function () {
        return {
            name: "dashboard"
        }
    }
}
</script>