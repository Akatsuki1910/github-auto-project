// ... (Existing code)
const powerOfFourButton = document.getElementById('power-of-four') as HTMLButtonElement;
const display = document.getElementById('display') as HTMLInputElement;
powerOfFourButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.pow(currentValue, 4).toString();
    }
});
//...(rest of the code)