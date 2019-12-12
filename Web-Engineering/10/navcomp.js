export default {
    template: `<div>
    <ul style="list-style-type: none;">
    <li v-bind:style="horizontal ? 'float: left;' : 'float: center'"><a href="default.asp">Home</a></li>
    <li><a href="news.asp">News</a></li>
    </ul> 
    </div>
    `,
    props: {
        prop: {
            type: Boolean,
            default: true
        }
      },
    data() {
        return {
            horizontal: this.prop,
            av: 'float: left'
        }
    },
    methods: {
        setFloatLeft() {
            if (horizontal) {
                return 'red';
            } else {
                return 'green';
            }
        }
    }
}
