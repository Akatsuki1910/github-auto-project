// ... (Existing code)
const swapButton = document.getElementById('swap') as HTMLButtonElement;
swapButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display.value.length >= 2) {
        const swappedValue = display.value.slice(-2) + display.value.slice(0, -2);
        display.value = swappedValue;
    }
});
// ... (Rest of the existing code)