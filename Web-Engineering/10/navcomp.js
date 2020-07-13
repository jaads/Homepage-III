export default {
    template: `
    <div>
        <ul style="list-style-type: none;">
            <li v-bind:style="horizontal ? 'float: left; margin-left: 1rem;' : 'float: center'">
                <span href='#'>{{name}}</span>
            </li>
        </ul> 
    </div>
    `,
    props: {
        horizontal: {
            type: Boolean,
            default: true
        },
        name: {
            type: String,
            default: 'Hello World'
        }
    },
    data() {
        return {
            horizontal: this.prop,
            name: this.name
        }
    }
}
