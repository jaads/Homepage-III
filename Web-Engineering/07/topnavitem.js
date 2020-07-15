import { LitElement, html, css } from 'https://unpkg.com/lit-element/lit-element.js?module';

class NavItem extends LitElement {

    static get properties() {
        return {
            name: { type: String }
        };
    };

    constructor() {
        super();
        this.name = "Hello";
    };

    static get styles() {
        return css`
          li {
            display: inline;
            margin-right: 2rem;
            cursor: pointer;
            padding: 1rem;
        }
        
        li:hover {
            color: yellow;
            background-color: darkgray;
        }`;
    };

    render() {
        return html`<li>${this.name}</li>`;
    };
}

customElements.define('topnav-item', NavItem);