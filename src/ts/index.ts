// ... (Existing code)
const truncateButton = document.getElementById('truncate') as HTMLButtonElement;

truncateButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display.value) {
        try {
            const result = Math.trunc(parseFloat(display.value));
            display.value = result.toString();
        } catch (error) {
            display.value = 'Error';
        }
    }
});
// ... (Rest of existing code)