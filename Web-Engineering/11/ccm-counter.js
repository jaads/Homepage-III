// Kein IIFE, sondern Block scaoped!
(() => {
    const component = {
        name: 'counter',
        ccm: 'https://ccmjs.github.io/ccm/ccm.js',
        config: {
            html: ['ccm.load', 'template.html']
        },
        Instance: function () {
            let count = 0;
            this.start = async () => {
                this.element.innerHTML = '';
                this.element.appendChild(this.ccm.helper.html(this.html, {
                    counter: 0,
                    onclickplus: () => {
                        count++;
                        this.element.querySelector('p').innerHTML = count;
                    },
                    onclickminus: () => {
                        count--;
                        this.element.querySelector('p').innerHTML = count;
                    }
                }));
            };
        }
    };
    let b = "ccm." + component.name + (component.version ? "-" + component.version.join(".") : "") + ".js"; if (window.ccm && null === window.ccm.files[b]) return window.ccm.files[b] = component; (b = window.ccm && window.ccm.components[component.name]) && b.ccm && (component.ccm = b.ccm); "string" === typeof component.ccm && (component.ccm = { url: component.ccm }); let c = (component.ccm.url.match(/(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)/) || ["latest"])[0]; if (window.ccm && window.ccm[c]) window.ccm[c].component(component); else { var a = document.createElement("script"); document.head.appendChild(a); component.ccm.integrity && a.setAttribute("integrity", component.ccm.integrity); component.ccm.crossorigin && a.setAttribute("crossorigin", component.ccm.crossorigin); a.onload = function () { window.ccm[c].component(component); document.head.removeChild(a) }; a.src = component.ccm.url }
})();