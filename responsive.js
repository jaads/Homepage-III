const topnav = document.querySelector("#myTopnav");

function openMobileTopNav() {
    if (topnav.className === "topnav") {
        topnav.classList.add("responsive");
    } else {
        topnav.classList.remove("responsive")
    }
};