// ... (Existing code)
const flipSignButton = document.getElementById('flip-sign') as HTMLButtonElement;
flipSignButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (-currentValue).toString();
    }
});
// ... (Rest of existing code)