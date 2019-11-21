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
            background-color: var(--second-color);
            color: var(--main-color);
            margin: 1rem;
            border-radius: 1rem;
            padding: 0.2rem;
            padding-left: 1rem;
        }

        div {
            margin: 1rem
        }
        `;
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