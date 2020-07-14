import Counter from './counter.js';
import Navcomp from './navcomp.js';

new Vue({
    el: '#vuecounterdiv',
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
});

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
        },
        dec() {
            counterStore.commit('decrement');
        }
    }
});


new Vue({
    el: '#hornav',
    components: { Navcomp }
});

new Vue({
    el: '#vertnav',
    components: { Navcomp }
});
