import { LitElement, html, css } from 'https://unpkg.com/lit-element@2.2.1/lit-element.js?module';

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
            padding: 2rem;
        }

        .activenavitem {
            border-style: none none solid none;
            border-color: var(--main-color);
        }
        
        .headerbg {
            background-image: linear-gradient(#1659A7, var(--second-color));
        }
        
        .topnav {
            display: flex;
            align-items: center;
        }
        
        .topnav a {
            display: inline-block;
            color: #f2f2f2;
            padding: 14px 16px;
            text-decoration: none;
            text-transform: uppercase;
            flex-grow: 1;
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
        

        /* Medium devices (tablets, 768px and down) */
        @media (max-width: 768px) {
        
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
                flex-direction: column;
                align-items: stretch;	
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
                /* text-align: left; */
                flex-grow: 0;
            }
        
        }
        
        /* Small devices (landscape phones, 576px and down) */
        @media screen and (max-width: 576px) {
        
            .topnav a img {
                width: 4rem;
            }
        
            .topnav a.icon {
                margin: 0;
                padding-bottom: 0;
            }

            .fancy-button span {
                display: none;
            }
        
        }`;
    }

    render() {
        return html`
        <link rel="stylesheet" href="/node_modules/@fortawesome/fontawesome-free/css/all.min.css">
        <header class="headerbg">
            <div class="topnav" id="myTopnav">
            <a href="/index.html"><img src="/Logo/path4569.svg"></a>
                <div class="topnav-right">
                    <a href="/Paper/Paper.html">paper</a>
                    <a href="/Web-Engineering/WE.html">web engineering</a>
                    <a href="/Products/products.html">products</a>
                    <a href="/Presentations/presentation.html">Presentations</a>
                    <a href="https://github.com/jaads" target="_blank"><i class="fab fa-github fa-2x"></i></a>
                    <a href="https://www.xing.com/profile/Jan_Arends2" target="_blank"><i class="fab fa-xing fa-2x"></i></a>
                <a href="https://www.linkedin.com/in/jan-arends-1a83b8217/" target="_blank"><i class="fab fa-linkedin-in fa-2x"></i></a>
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

        const link = this.shadowRoot.querySelector(".topnav-right a[href$= '" + this.activeitem + "']");
        link.className += " activenavitem";

    }
}

customElements.define('my-navbar', MyNavbar);