export default {
    template: `
    <div>
        <ul style="list-style-type: none;">
            <li v-bind:style="alignment==='horizontal' ? 'float: left; margin-left: 1rem;' : 'float: center'">
                <span href='#'>{{name}}</span>
            </li>
        </ul> 
    </div>
    `,
    props: {
        alignment: {
            type: String,
            default: 'vertical'
        },
        name: {
            type: String,
            default: 'Hello World'
        }
    }
};
