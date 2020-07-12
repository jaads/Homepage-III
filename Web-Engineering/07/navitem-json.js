import { LitElement, html, css } from 'https://unpkg.com/lit-element/lit-element.js?module';

class NavItem2 extends LitElement {

    static get properties() {
        return {
            headline: { type: String }
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
        this.headline = "";
    }

    render() {
        return html`
        <div>
        <a>${this.headline}</a>
        </div>
        `;
    }
}

customElements.define('my-navitem2', NavItem2);