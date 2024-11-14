const features = document.querySelector("#features");
const company = document.querySelector("#company");

const featureImg = document.querySelector("#features-img");
const companyImg = document.querySelector("#company-img");

const featureDropdown = document.querySelector(".features .drop-down");
const companyDropdown = document.querySelector(".company .drop-down");

features.addEventListener("click", () => {
    if (featureDropdown.style.display == "flex") {
        featureImg.src = "./images/icon-arrow-down.svg";
        featureDropdown.style.display = "none";
    } else {
        featureImg.src = "./images/icon-arrow-up.svg";
        featureDropdown.style.display = "flex";
    }
});

company.addEventListener("click", () => {
    if (companyDropdown.style.display == "flex") {
        companyImg.src = "./images/icon-arrow-down.svg";
        companyDropdown.style.display = "none";
    } else {
        companyImg.src = "./images/icon-arrow-up.svg";
        companyDropdown.style.display = "flex";
    }
});


const hamburger = document.querySelector("#hamburger");
const cross = document.querySelector("#cross");
const navLinks = document.querySelector(".nav-links");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click", () => {
    navLinks.classList.add("show-menu");
    setTimeout(() => {
        overlay.classList.add("show-menu");
    }, 200);
})

cross.addEventListener("click", () => {
    navLinks.classList.remove("show-menu");
    overlay.classList.remove("show-menu");
})