import { LitElement, html, css } from 'https://unpkg.com/lit-element/lit-element.js?module';

class NavItem extends LitElement {

    static get properties() {
        return {
            reference: { type: String }
        };
    }

    constructor() {
        super();
        this.reference = '#';
    }

    render() {
        return html`
        <a href="${this.reference}"><slot></slot></a>
        `;
    }
}

customElements.define('my-navitem', NavItem);