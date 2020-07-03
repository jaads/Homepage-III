const allh1 = document.querySelectorAll('h2, h3');
const sidenav = document.querySelector('#sidenav');

console.log(allh1);

allh1.forEach(h => {
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


