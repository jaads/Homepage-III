
const jsonBtn = document.getElementById('loadjsonfile');
const topNavList = document.getElementById('topnav');
const sideNavList = document.getElementById('sideNavList');
const mainArea = document.getElementById('mainarea');
const linksList = document.getElementById('linksList');
let currentSideNav = [];

window.onload = function () {
    // Get data from the server 
    fetch('data.json')
        .then(res => res.json())
        .then(data => {
            makeMainMenu(data);
        })
};

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
