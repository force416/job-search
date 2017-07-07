import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const countStore = {
    namespaced: true,
    state: {
        count: 0
    },
    mutations: {
        increment: (state, payload) => state.count += payload.amount,
        decrement: state => state.count--
    },
    actions: {
        increment(context, payload) {
            return new Promise((resolve, reject) => {
                setTimeout(function () {
                    context.commit('increment', payload);
                    resolve();
                }, 1000);
            });
        }
    }
};

export default new Vuex.Store({
    modules: {
        countStore: countStore
    }
});