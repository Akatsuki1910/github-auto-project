// ... (Existing code)
const cbrtButton = document.getElementById('cbrt');
cbrtButton.addEventListener('click', () => {
    if (display.value) {
        display.value = math.cbrt(parseFloat(display.value)).toString();
    }
});
// ... (rest of the code)