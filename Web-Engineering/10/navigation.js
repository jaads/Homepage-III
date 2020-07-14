const navStore = new Vuex.Store({
    state: {
        index: 1
    },
    mutations: {
        setHTML() {
            navStore.state.index = 0;
        },
        setCSS() {
            navStore.state.index = 1;
        },
        setJS() {
            navStore.state.index = 2;
        }
    }
});

new Vue({
    el: '#vuejsnav',
    computed: {
        index() {
            return navStore.state.index;
        }
    },
    methods: {
        getHTMLStuff() {
            navStore.commit('setHTML');
            this.render();
        },
        getCSSStuff() {
            navStore.commit('setCSS');
            this.render();
        },
        getJSStuff() {
            navStore.commit('setJS');
            this.render();
        },
        render() {
            const index = navStore.state.index;
            document.querySelector('#currstate').innerText = 'Current state: ' + index;
            fetch('../06/data.json')
                .then(res => res.json())
                .then(data => {
                    const topics = data[index].topics;
                    sideNavList.innerHTML = '';
                    topics.forEach((elem, innerIdx) => {
                        let sideNavListItem = document.createElement('li');
                        sideNavList.appendChild(sideNavListItem);
                        sideNavListItem.classList.add('navitem');
                        sideNavListItem.innerText = elem.navitem;
                        sideNavListItem.onclick = () => {
                            updateContent(data, index, innerIdx);
                        };
                    });
                });
            let updateContent = function (data, idx, innerIdx) {
                let topic = data[idx].topics[innerIdx].text;
                document.getElementById('mainarea').innerHTML = topic;
                linksList.innerHTML = '';
                let linkArr = data[idx].topics[innerIdx].resources;
                linkArr.forEach(elem => {
                    let link = document.createElement('a');
                    link.innerText = elem.link;
                    linksList.appendChild(link);
                });
            };

        }
    }
});
