import Counter from './counter.js';
import Navcomp from './navcomp.js';

new Vue({
    el: '#vueapp',
    components: { Counter }
});

const counterStore = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++;
        },
        decrement(state) {
            state.count--;
        }
    }
})

new Vue({
    el: '#counterwithstore',
    computed: {
        counteroutput() {
            return counterStore.state.count;
        }
    },
    methods: {
        inc() {
            counterStore.commit('increment');
            console.log('Store state: ' + counterStore.state.count);
        },
        dec() {
            counterStore.commit('decrement');
            console.log('Store state: ' + counterStore.state.count);
        }
    }
});


new Vue({
    el: '#vueapp2',
    components: { Navcomp }
});
