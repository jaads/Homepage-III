import { LitElement, html } from 'https://unpkg.com/lit-element/lit-element.js?module';

class MyStopWatch extends LitElement {

    static get properties() {
        return {
            seconds: { type: Number },
            minutes: { type: Number },
            hours: { type: Number }
        };
    }

    constructor() {
        super();
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
        this.formattedTime = "00:00:00";
        this.timerID = 0;
    }

    addSec = () => {
        this.seconds += 1;
        if (this.seconds >= 60) {
            this.seconds = 0;
            this.minutes++;
            if (this.minutes >= 60) {
                this.minutes = 0;
                this.hours++;
                if (this.hours >= 24) {
                    this.seconds = 0;
                    this.minutes = 0;
                    this.hours = 0;
                }
            }
        }

        this.formattedTime = (this.hours ? (this.hours > 9 ? this.hours : "0" + this.hours) : "00") + ":"
            + (this.minutes ? (this.minutes > 9 ? this.minutes : "0" + this.minutes) : "00") + ":"
            + (this.seconds > 9 ? this.seconds : "0" + this.seconds);
    }

    start = () => {
        clearInterval(this.timerID)
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
        this.formattedTime = "00:00:00";
        this.timerID = setInterval(this.addSec, 1000);
        this.shadowRoot.getElementById('start-btn').disabled = true;

    }

    stop = () => {
        clearInterval(this.timerID)
        this.shadowRoot.getElementById('start-btn').disabled = false;
        this.shadowRoot.getElementById('continue-btn').disabled = false;

    }

    continue = () => {
        this.timerID = setInterval(this.addSec, 1000);
        this.shadowRoot.getElementById('continue-btn').disabled = true;
    }

    render() {
        return html`
          <p>${this.formattedTime}</p>
          <button @click="${this.start}" id="start-btn">Start</button>
          <button @click="${this.stop}">Stop</button>
          <button @click="${this.continue}" id="continue-btn">Weiter</button>
        `;
    }
}

customElements.define('my-stopwatch', MyStopWatch);