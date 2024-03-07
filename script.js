
const menuBtn = document.querySelector(".header button");
const menu = document.querySelector(".menu");
const menuCloseBtn = document.querySelector(".wrapper");
const menuOfferBtn = document.querySelector(".offer");
const menuOffer = document.querySelector(".offer-menu");
const emailLine = document.querySelector('.line-input2');
const emailInput = document.querySelector('.inputField-email');
const errorIcon = document.querySelector('.error')


menuBtn.addEventListener("click", () => {
  menu.classList.add("full-menu") 
});

menuCloseBtn.addEventListener("click", () => {
    menu.classList.remove("full-menu")    
});

menuOfferBtn.addEventListener("click", () => {
    menuOffer.classList.toggle("full-offer-menu")   
});

emailInput.addEventListener('input', function() {
    if (!isValidEmail(this.value)) {
        emailLine.classList.add('invalid');
        errorIcon.style.display = 'inline';
    } else {
        emailLine.classList.remove('invalid');
        errorIcon.style.display = 'none';
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};