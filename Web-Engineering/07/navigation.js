const topNavList = document.getElementById('example-topnav-list');
const sideNavList = document.getElementById('sideNavList');
const mainArea = document.getElementById('mainarea');
const linksList = document.getElementById('linksList');

let currentSideNav = [];

fetch('../06/data.json')
    .then(res => res.json())
    .then(data => {
        makeMainMenu(data);
    });

let makeMainMenu = function (jsonObj) {
    // Create list item for menu for each object from the JSON file
    jsonObj.forEach(function (elem, idx) {
        let listItem = document.createElement('topnav-item');
        listItem.setAttribute("name", elem.headline);
        listItem.onclick = () => applyFunctions(jsonObj, idx);
        topNavList.appendChild(listItem);
    });
    applyFunctions(jsonObj, 0);
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
    currentSideNav.forEach((elem, innerIdx) => {
        let sideNavListItem = document.createElement('sidenav-item');
        sideNavListItem.setAttribute("name", elem);
        sideNavList.appendChild(sideNavListItem);
        sideNavListItem.onclick = () => updateContent(data, idx, innerIdx);
    });
};

let updateContent = function (data, idx, innerIdx) {
    let topic = data[idx].topics[innerIdx].text;
    let comp = document.createElement('my-contentitem');
    comp.setAttribute('text', topic)
    mainArea.innerHTML = '';
    mainArea.appendChild(comp);
    linksList.innerHTML = '';
    let linkArr = data[idx].topics[innerIdx].resources;
    linkArr.forEach(elem => {
        let link = document.createElement('a');
        link.innerText = elem.link;
        linksList.appendChild(link);
    });

};
