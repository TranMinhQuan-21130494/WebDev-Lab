const male = document.getElementById("male");
const female = document.getElementById("female");
const visa = document.getElementById("visa");
const paypal = document.getElementById("paypal");

// Add click event listeners to the buttons
male.addEventListener("click", () => {
    male.classList.add("active");
    female.classList.remove("active");
});

female.addEventListener("click", () => {
    female.classList.add("active");
    male.classList.remove("active");
});

visa.addEventListener("click", () => {
    visa.classList.add("active");
    paypal.classList.remove("active");
});

paypal.addEventListener("click", () => {
    paypal.classList.add("active");
    visa.classList.remove("active");
});