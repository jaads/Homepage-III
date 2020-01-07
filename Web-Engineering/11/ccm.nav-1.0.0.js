(() => {
    const component = {
        name: 'navigationcompontent',
        ccm: 'https://ccmjs.github.io/ccm/ccm.js',
        config: {
            html: ['ccm.load', './navtemplate.html'],
            version: [1, 0, 0]
        },
        Instance: function () {
            this.start = async () => {

                const $ = this.ccm.helper;
                $.setContent(this.element, $.html(this.html, {}));

                let currentSideNav = [];

                const topNavList = this.element.querySelector('topnav');
                const sideNavList = this.element.querySelector('sideNavList');
                const mainArea = this.element.querySelector('mainarea');
                const linksList = this.element.querySelector('linksList');

                const fetchData = async () => {
                    let data = [
                        {
                            "headline": "HTML",
                            "topics": [
                                {
                                    "navitem": "Headings",
                                    "text": "Heading content defines the header of a section (whether explicitly marked up using sectioning content elements, or implied by the heading content itself).<br><code>h1, h2, h3, h4, h5, h6, hgroup</code>",
                                    "resources": [
                                        {
                                            "link": "https://html.spec.whatwg.org/multipage/dom.html#heading-content"
                                        }
                                    ]
                                },
                                {
                                    "navitem": "Paragraphs",
                                    "text": "A paragraph is typically a run of phrasing content that forms a block of text with one or more sentences that discuss a particular topic, as in typography, but can also be used for more general thematic grouping. For instance, an address is also a paragraph, as is a part of a form, a byline, or a stanza in a poem.",
                                    "resources": [
                                        {
                                            "link": "https://html.spec.whatwg.org/multipage/dom.html#paragraphs"
                                        }
                                    ]
                                },
                                {
                                    "navitem": "Links",
                                    "text": "If the a element has an href attribute, then it represents a hyperlink (a hypertext anchor) labeled by its contents.",
                                    "resources": [
                                        {
                                            "link": "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element"
                                        }
                                    ]
                                },
                                {
                                    "navitem": "Images",
                                    "text": "In HTML, images are defined with the <img> tag. <br> The <img> tag is empty, it contains attributes only, and does not have a closing tag. <br> The src attribute specifies the URL (web address) of the image:",
                                    "resources": [
                                        {
                                            "link": "https://www.w3schools.com/html/html_images.asp"
                                        }
                                    ]
                                },
                                {
                                    "navitem": "Tables",
                                    "text": "An HTML table is defined with the <table> tag.<br> Each table row is defined with the <tr> tag. A table header is defined with the <th> tag. By default, table headings are bold and centered. A table data/cell is defined with the <td> tag.",
                                    "resources": [
                                        {
                                            "link": "https://www.w3schools.com/html/html_tables.asp"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "headline": "CSS",
                            "topics": [
                                {
                                    "navitem": "Selectors",
                                    "text": "I'm telling you about selectors",
                                    "resources": [
                                        {
                                            "link": "https://duckduckgo.com/"
                                        },
                                        {
                                            "link": "www.googledinomu.de"
                                        }
                                    ]
                                },
                                {
                                    "navitem": "Colors",
                                    "text": "I'm telling you about colos",
                                    "resources": [
                                        {
                                            "link": "https://duckduckgo.com/"
                                        }
                                    ]
                                },
                                {
                                    "navitem": "Boxes",
                                    "text": "I'm telling you about ",
                                    "resources": [
                                        {
                                            "link": "https://duckduckgo.com/"
                                        }
                                    ]
                                },
                                {
                                    "navitem": "Display",
                                    "text": "I'm telling you about ",
                                    "resources": [
                                        {
                                            "link": "https://duckduckgo.com/"
                                        }
                                    ]
                                },
                                {
                                    "navitem": "Float",
                                    "text": "I'm telling you about ",
                                    "resources": [
                                        {
                                            "link": "https://duckduckgo.com/"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "headline": "Javascript",
                            "topics": [
                                {
                                    "navitem": "Functions",
                                    "text": "I'm telling you about headings",
                                    "resources": [
                                        {
                                            "link": "https://duckduckgo.com/"
                                        }
                                    ]
                                },
                                {
                                    "navitem": "Objects",
                                    "text": "I'm telling you about ",
                                    "resources": [
                                        {
                                            "link": "https://duckduckgo.com/"
                                        }
                                    ]
                                },
                                {
                                    "navitem": "Scope",
                                    "text": "I'm telling you about ",
                                    "resources": [
                                        {
                                            "link": "https://duckduckgo.com/"
                                        }
                                    ]
                                },
                                {
                                    "navitem": "Events",
                                    "text": "I'm telling you about ",
                                    "resources": [
                                        {
                                            "link": "https://duckduckgo.com/"
                                        }
                                    ]
                                },
                                {
                                    "navitem": "Hoisting",
                                    "text": "I'm telling you about ",
                                    "resources": [
                                        {
                                            "link": "https://duckduckgo.com/"
                                        }
                                    ]
                                },
                                {
                                    "navitem": "Strict_mode",
                                    "text": "I'm telling you about ",
                                    "resources": [
                                        {
                                            "link": "https://duckduckgo.com/"
                                        }
                                    ]
                                },
                                {
                                    "navitem": "JSON",
                                    "text": "I'm telling you about ",
                                    "resources": [
                                        {
                                            "link": "https://duckduckgo.com/"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]

                    makeMainMenu(data);

                }

                let makeMainMenu = function (jsonData) {
                    // Create list item for menu for each object from the JSON file
                    jsonData.forEach(function (elem, idx) {
                        let listItem = document.createElement('li');
                        listItem.classList.add('menuitem');
                        listItem.classList.add('navitem');
                        listItem.onclick = () => applyFunctions(jsonData, idx);
                        listItem.innerText = elem.headline;
                        topNavList.appendChild(listItem);
                    });
                    applyFunctions(jsonData, 0);
                };

                let applyFunctions = function (data, idx) {
                    updateSideNav(data, idx);
                    updateContent(data, idx, 0);
                };

                let updateSideNav = function (data, idx) {
                    let dataArr = data[idx].topics;
                    currentSideNav = [];
                    dataArr.forEach((item) => currentSideNav.push(item.navitem));
                    sideNavList.innerHTML = '';
                    currentSideNav.forEach(function (elem, innerIdx) {
                        let sideNavListItem = document.createElement('li');
                        sideNavList.appendChild(sideNavListItem);
                        sideNavListItem.classList.add('navitem');
                        sideNavListItem.onclick = () => {
                            updateContent(data, idx, innerIdx);
                        };
                        sideNavListItem.innerText = elem;
                    });

                };

                let updateContent = function (data, idx, innerIdx) {
                    let topic = data[idx].topics[innerIdx].text;
                    mainArea.innerHTML = topic;
                    linksList.innerHTML = '';
                    let linkArr = data[idx].topics[innerIdx].resources;
                    linkArr.forEach(elem => {
                        let link = document.createElement('a');
                        link.innerText = elem.link;
                        linksList.appendChild(link);
                    });

                };

                fetchData();
            }
        }
    };
    let b = "ccm." + component.name + (component.version ? "-" + component.version.join(".") : "") + ".js"; if (window.ccm && null === window.ccm.files[b]) return window.ccm.files[b] = component; (b = window.ccm && window.ccm.components[component.name]) && b.ccm && (component.ccm = b.ccm); "string" === typeof component.ccm && (component.ccm = { url: component.ccm }); let c = (component.ccm.url.match(/(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)/) || ["latest"])[0]; if (window.ccm && window.ccm[c]) window.ccm[c].component(component); else { var a = document.createElement("script"); document.head.appendChild(a); component.ccm.integrity && a.setAttribute("integrity", component.ccm.integrity); component.ccm.crossorigin && a.setAttribute("crossorigin", component.ccm.crossorigin); a.onload = function () { window.ccm[c].component(component); document.head.removeChild(a) }; a.src = component.ccm.url }
})();


