const nav = document.querySelector('#we-sidenav');

const span = document.createElement('span');
span.id = 'sidenav-close';
span.innerText = 'X';
nav.appendChild(span);

(async () => {
    let res = await fetch('/Web-Engineering/we-sidenav.json');
    if (res.ok) {
        let data = await res.json();
        makeMenu(data);
    } else {
        console.log('error: ', res);
    }
})();

function makeMenu(data) {
    data.forEach(headlineElem => {
        let h3 = document.createElement('h3');
        h3.innerText = headlineElem.headline;
        nav.appendChild(h3);
        headlineElem.topics.forEach(elem => {
            let link = document.createElement('a');
            link.innerText = elem.subheading;
            link.href = elem.href;
            nav.appendChild(link);
        });
    });
};