// ... (Existing code)
const powerOfTwoButton = document.getElementById('powerOfTwo') as HTMLButtonElement;
powerOfTwoButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.pow(2, currentValue).toString();
    }
});
// ... (Rest of existing code)