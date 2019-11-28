import { LitElement, html, css } from 'https://unpkg.com/lit-element/lit-element.js?module';

class BarChart extends LitElement {

    static get properties() {
        return {
            size: { type: Number }
        };
    }

    constructor() {
        super();
        this.size = 1;
    }

    static get styles() {
        return css`
            svg rect {
                fill: var(--second-color);
                transition: width;
                transition-duration: 2s;
            }
        `;
    }

    render() {
        return html`
            <div @click="${this.setLength}" class="trigger"></div>
            <svg viewBox="0 0 25 2">
                <rect width="${this.size}" height="0.8"></rect>
            </svg>
        `;
    }
}

customElements.define('my-barchart', BarChart);