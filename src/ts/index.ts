// ... (Existing code)
const tenToThePowerXButton = document.getElementById('ten-to-the-power-x') as HTMLButtonElement;
tenToThePowerXButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const num = parseFloat(display.value);
    if (!isNaN(num)) {
        display.value = Math.pow(10, num).toString();
    }
    else {
        display.value = "Invalid input";
    }
});
// ... (Rest of existing code)