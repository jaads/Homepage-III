import { LitElement, html, css } from 'https://unpkg.com/lit-element/lit-element.js?module';

class NavItem2 extends LitElement {

    static get properties() {
        return {
            name: { type: String }
        };
    }

    static get styles() {
        return css`
          a {
            padding-right: 0.5rem;
        }`;
    }

    constructor() {
        super();
        this.name = "Item";
    }

    render() {
        return html`
        <li>${this.name}</li>`;
    }
}

customElements.define('sidenav-item', NavItem2);