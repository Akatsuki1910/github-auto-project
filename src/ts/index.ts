// ... (Existing code)
const halfButton = document.getElementById('half') as HTMLButtonElement;
halfButton.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(display.value);
        display.value = (currentValue / 2).toString();
    } catch (error) {
        display.value = 'Error';
    }
});
// ... (Rest of the existing code)