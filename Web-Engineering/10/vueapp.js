import Counter from './counter.js';
import Navcomp from './navcomp.js';

new Vue({
    el: '#vueapp',
    components: { Counter }
});

new Vue({
    el: '#vueapp2',
    components: { Navcomp }
});