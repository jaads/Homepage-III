import { LitElement, html, css } from 'https://unpkg.com/lit-element/lit-element.js?module';

class ContentItem extends LitElement {

    static get properties() {
        return {
            text: { type: String }
        };
    }

    // static get styles() {
    //     return css`
    //     `;
    // }

    constructor() {
        super();
        this.text = "sds";
    }

    render() {
        return html`
            <p>${this.text}</p>
        `;
    }
}

customElements.define('my-contentitem', ContentItem);