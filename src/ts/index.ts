// ... (Existing code)
const halfButton = document.getElementById('half') as HTMLButtonElement;
halfButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (currentValue / 2).toString();
    }
});
const eButton = document.getElementById('e') as HTMLButtonElement;
eButton.addEventListener('click', () => {
    display.value = Math.E.toString();
});
// ... (Rest of existing code)