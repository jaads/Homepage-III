export default {
    template: `<div>
    <p>Value: {{ value }}</p>
    <p>Buttons pressed: {{ count }}</p>
    <button @click="decrement">- 1</button>
    <button @click="increment">+ 1</button>
    </div> `,
    data() {
        return {
            count: 0, 
            value: 0
        }
    },
    methods: {
        increment() {
            this.value++;
            this.count++;
        },
        decrement() {
            this.value--;
            this.count++;
        }
    }
}
