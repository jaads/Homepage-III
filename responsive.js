const topnav = document.querySelector("#myTopnav");

function myFunction() {
    if (topnav.className === "topnav") {
        topnav.classList.add("responsive");
    } else {
        topnav.classList.remove("responsive")
    }    
};