import { LitElement, html, css } from './vendor/lit-element.js';


class MyNavbar extends LitElement {

    constructor() {
        super();
        this.navid = "myTopnav";
        this.icon = ".topnav-right .icon";
    }

    static get properties() { 
        return { 
          activeitem: { type: String }
        };
      }
      

    static get styles() {
        return css`

        header {
            padding: 1rem;
            position: relative;
        }

        .headerbg {
            background-image: linear-gradient(#1659A7, var(--second-color));
        }

        .topnav {
            overflow: hidden;
        }
        
        .topnav a {
            display: inline-block;
            color: #f2f2f2;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            text-transform: uppercase;
            margin-bottom: auto;
        }
        
        .topnav-right {
            float: right;
        }
        
        .topnav .topnav-right a:hover {
            background-color: var(--main-color);
            color: var(--mydarkerblue);
        }
        
        .topnav .icon {
            display: none;
            margin: 0.7rem;
            float: right;
            font-size: xx-large;
        }

        .activenavitem {
            border-style: none none solid none;
            border-color: var(--main-color);
        }

        /* Medium devices (tablets, 768px and down) */
        @media (max-width: 768px) {

            .topnav-right {
                float: none;
                display: inline;
            }
            .topnav-right a {
                display: none;
            }

            .topnav a.icon {
                display: block;
            }

            .topnav a img {
                width: 6rem;
            }

            .topnav.responsive {
                position: relative;
            }

            .topnav.responsive .activenavitem{
                background-color: var(--main-color);
                color: var(--mydarkerblue);
            }

            .topnav.responsive a.icon {
                position: absolute;
                right: 0;
                top: 0;
            }

            .topnav.responsive a {
                float: none;
                display: block;
                text-align: left;
            }

        }

        /* Small devices (landscape phones, 576px and down) */
        @media screen and (max-width: 576px) {

            main h1 {
                font-size: 2rem;
            }


            .landing-bg {
                background-size: cover;
            }

            .topnav a img {
                width: 4rem;
            }

            .topnav a.icon {
                margin: 0;
                padding-bottom: 0;
            }

            .fancy-button {
                height: 3rem;
            }

            header .fancy-button {
                height: 3.2rem;
                min-width: 5rem;
            }

            .fancy-button span {
                display: none;
            }

            header {
                padding: 0.5rem;
            }

            main {
                font-size: 1rem;
                padding-top: 0;
            }

        }`;
    }

    render() {
        return html`
        <header class="headerbg">
            <div class="topnav" id="myTopnav">
            <a href="/index.html"><img src="/Logo/path4569.svg"></a>
                <div class="topnav-right">
                    <a href="/Paper/Paper.html">paper</a>
                    <a href="/Web-Engineering/WE.html">web engineering</a>
                    <a href="/Presentations/presentation.html">Presentations</a>
                    <a href="/Summaries/summaries.html">summaries</a>
                    <a href="https://github.com/jaads" target="_blank"><i class="fab fa-github fa-2x"></i></a>
                    <a href="https://www.xing.com/profile/Jan_Arends2" target="_blank"><i class="fab fa-xing fa-2x"></i></a>
                    <a class="icon">&#9776;</a>
                </div>
            </div>
        </header>`;
    }

    firstUpdated() {
        const topnavdiv = this.shadowRoot.getElementById(this.navid);
        const icon = this.shadowRoot.querySelector(this.icon);

        icon.onclick = () => {
            if (topnavdiv.className === "topnav") {
                topnavdiv.className += " responsive";
            } else {
                topnavdiv.className = "topnav";
            }
        }

        const link = this.shadowRoot.querySelector( ".topnav-right a[href$= '" + this.activeitem + "']" );
        link.className += " activenavitem";
        
    }
}

customElements.define('my-navbar', MyNavbar);