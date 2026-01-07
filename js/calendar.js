const dayOfMonth = new Date().getDate();

for (var number of document.querySelectorAll(".calendar-number")) {
    if (number.textContent == dayOfMonth) {
        number.parentElement.parentElement.style.background = "var(--party-color-gold)";
        number.parentElement.style.color = "var(--party-color-blue)";
        break;
    }
}
