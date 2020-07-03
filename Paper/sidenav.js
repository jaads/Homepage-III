const allheadlines = document.querySelectorAll('h2, h3, h4');
const sidenav = document.querySelector('#sidenav');

function addIDstoHeadlines() {
    let h2counter = 1;
    let h3counter = 1;
    let h4counter = 1;
    allheadlines.forEach(h => {
        if (h.nodeName === 'H2') {
            h.innerText = h2counter + " " + h.innerText;
            h.id = h2counter;
            h2counter++;
            h3counter = 1;
        } else if (h.nodeName === 'H3') {
            h.innerText = h2counter - 1 + "." + h3counter + " " + h.innerText;
            h.id = (h2counter - 1) + '.' + h3counter;
            h3counter++;
            h4counter = 1;
        } else if (h.nodeName === 'H4') {
            h.innerText = h2counter - 1 + "." + (h3counter - 1) + "." + h4counter + " " + h.innerText;
            h.id = h2counter - 1 + "." + (h3counter - 1) + "." + h4counter;
            h4counter++;
        }
    });
};

function createNavItems() {
    allheadlines.forEach(h => {
        const aElem = document.createElement('a');
        aElem.href = '#' + h.id;
        if (h.nodeName == 'H2') {
            aElem.classList.add('headline2');
        }
        if (h.nodeName == 'H3') {
            aElem.classList.add('heading3');
        }
        if (h.nodeName == 'H4') {
            aElem.classList.add('heading4');
        }
        const node = document.createTextNode(h.innerText);
        aElem.appendChild(node);
        sidenav.appendChild(aElem);
    });
}

addIDstoHeadlines();
createNavItems();