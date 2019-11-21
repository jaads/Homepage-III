import { LitElement, html, css } from 'https://unpkg.com/lit-element/lit-element.js?module';

class NavItem extends LitElement {

    static get properties() {
        return {
            reference: { type: String }
        };
    }

    static get styles() {
        return css`
          a { color: white; text-decoration: none; }
        `;
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