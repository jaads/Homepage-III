const allheadlines = document.querySelectorAll('h2, h3');
const sidenav = document.querySelector('#sidenav');

// console.log(allheadlines);


function addIDstoHeadlines() {
    let h2counter = 1;
    let h3counter = 1;
    allheadlines.forEach(h => {
        if (h.nodeName === 'H2') {
            h.id = h2counter;
            h2counter++;
            h3counter = 1;
        } else if (h.nodeName === 'H3') {
            h.id = (h2counter - 1).toString() + '.' + h3counter.toString();
            h3counter++;
        }
    });
};

function createNavItems() {
    allheadlines.forEach(h => {
        const aElem = document.createElement('a');
        aElem.href = '#' + h.id;
        if (h.nodeName == 'H2') {
            aElem.classList.add('headline1');
        } else {
            aElem.classList.add('subheading');
        }
        const node = document.createTextNode(h.innerText);
        aElem.appendChild(node);
        sidenav.appendChild(aElem);
    });
}

addIDstoHeadlines();
createNavItems();