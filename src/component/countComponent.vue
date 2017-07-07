<template>
    <div id="app">
        <p>{{ count }}</p>
        <p>
            <button @click="increment">+</button>
            <button @click="decrement">-</button>
        </p>
    </div>
</template>

<script>

export default {
    computed: {
        count() {
            return this.$store.state.countStore.count;
        }
    },
    methods: {
        increment() {
            this.$store.dispatch({ type: 'countStore/increment', amount: 1 }).then(() => {
                console.log("add complete!");
            });
        },
        decrement() {
            this.$store.commit('countStore/decrement');
        }
    }
}
</script>