function navigator(state = 0, action) {
    if (typeof state === 'undefined') {
        return 0
    }

    switch (action.type) {
        case 'HTML':
            return 0;
        case 'CSS':
            return 1;
        case 'JS':
            return 2;
        default:
            return state;
    }
}

var store = Redux.createStore(navigator, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function render() {
    // Checked state fur further ussage
    const index = store.getState().toString();

    // Set the url accordingly
    history.pushState({ index }, `selected: ${index}`, `state=${index}`);

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

render();
store.subscribe(render);

document.getElementById('htmlactionbtn').onclick = () => store.dispatch({ type: 'HTML' });
document.getElementById('cssactionbtn').onclick = () => store.dispatch({ type: 'CSS' });
document.getElementById('jsactionbtn').onclick = () => store.dispatch({ type: 'JS' });


