const topnav = document.querySelector("#myTopnav");

function openMobileTopNav() {
    if (topnav.className === "topnav") {
        topnav.classList.add("responsive");
    } else {
        topnav.classList.remove("responsive")
    }
};

const sidenavburger = document.querySelector("#sidenav-burger");
const sidenav = document.querySelector("#sidenav");

sidenavburger.onclick = function () {
    sidenav.style.display = "block";
    sidenavburger.style.display = "none";
};

const sidenavCloseBtn = document.querySelector('#sidenav-close');
sidenavCloseBtn.onclick = function () {
    sidenav.style.display = 'none';
    sidenavburger.style.display = 'block';

};