// ... (Existing code)
const cubedButton = document.getElementById('cubed') as HTMLButtonElement;
cubedButton.addEventListener('click', () => {
    if (display.value) {
        const currentValue = parseFloat(display.value);
        display.value = Math.pow(currentValue, 3).toString();
    }
});