// Promieses --------------------------------------

const loadBtn = document.getElementById('loadAsyncBtn1');
const clearBtn = document.getElementById('clearBtn');
const placeholder1 = document.getElementById('firstfilecontent');
const placeholder2 = document.getElementById('secondfilecontent');

let getFileA = () => {
    return fetch('A.txt')
        .then(res => res.text())
};

let getFileB = () => {
    return fetch('B.txt')
        .then(res => res.text())
};

loadBtn.onclick = () => {
    let promises = [getFileA(), getFileB()];

    Promise.all(promises)
        .then(data => {
            placeholder1.innerText = data[0];
            placeholder2.innerText = data[1];
        });
};

clearBtn.onclick = () => {
    placeholder1.innerText = '';
    placeholder2.innerText = '';
}

// Async await ---------------------------------------
const loadBtn2 = document.getElementById('loadAsyncBtn2');
const clearBtn2 = document.getElementById('clearBtn2');
const placeholder1async = document.getElementById('firstfilecontentasync');
const placeholder2async = document.getElementById('secondfilecontentasync');

let getFileAWithSuger = async () => {
    let response = await fetch('A.txt');
    return response.text();
};

let getFileBWithSuger = async () => {
    let response = await fetch('B.txt');
    return response.text();
};

loadBtn2.onclick = async () => {
    let promises = [getFileAWithSuger(), getFileBWithSuger()];
    let data = await Promise.all(promises);
    placeholder1async.innerText = data[0];
    placeholder2async.innerText = data[1];
};

clearBtn2.onclick = () => {
    placeholder1async.innerText = '';
    placeholder2async.innerText = '';
}


// Web Worker ----------------------------------------

const generateBtn = document.getElementById('generateBtn');
const sortMainBtn = document.getElementById('sortMainBtn');
const sortWorkerBtn = document.getElementById('sortWorkerBtn');
const sortres1 = document.getElementById('sortres1');
const sortres2 = document.getElementById('sortres2');
let randomNumbers1 = [];
let randomNumbers2 = [];

generateBtn.onclick = function () {
    randomNumbers1 = [];
    randomNumbers2 = [];
    for (let i = 0; i < 100000; i++) {
        let randomNumber = Math.random()
        randomNumbers1.push(randomNumber);
        randomNumbers2.push(randomNumber);
    }
    sortMainBtn.disabled = false;
    sortWorkerBtn.disabled = false;
    console.log('Generated list of random numbers: ');
    console.log(randomNumbers1);
};

sortMainBtn.onclick = function () {
    console.log('Sorting the following using the main thread: ');
    console.log(randomNumbers1);
    let t0 = performance.now();
    randomNumbers1.sort((a, b) => a - b);
    let t1 = performance.now();
    let milliseconds = t1 - t0;
    sortres1.innerText = milliseconds + ' milliseconds when using the main thread.';
    console.log("Sorted in " + milliseconds + " milliseconds. Result:");
    console.log(randomNumbers1);
};

sortWorkerBtn.onclick = function () {
    console.log('Sorting the following using a web worker: ');
    console.log(randomNumbers2);
    let worker = new Worker('worker.js');
    worker.postMessage(randomNumbers2)
    worker.onmessage = function (ev) {
        sortres2.innerText = ev.data + ' milliseconds when using a web worker.';
    }
};

// Navigation --------------------------------

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
