// ... (Existing code)
const ceilButton = document.getElementById('ceil');
ceilButton.addEventListener('click', () => {
    display.value = Math.ceil(parseFloat(display.value)).toString();
});