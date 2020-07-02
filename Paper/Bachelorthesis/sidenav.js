const allh1 = document.querySelectorAll('h1, h2');
const sidenav = document.querySelector('#sidenav');

console.log(allh1);

allh1.forEach(h => {
    const aElem = document.createElement('a');
    aElem.href = '#' + h.id;
    if (h.nodeName == 'H1') {
        aElem.classList.add('headline1');
    } else {
        aElem.classList.add('subheading');
    }
    const node = document.createTextNode(h.innerText);
    aElem.appendChild(node);
    sidenav.appendChild(aElem);

});


