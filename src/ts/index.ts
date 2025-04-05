// ... (Existing code)
const hypotButton = document.getElementById('hypot') as HTMLButtonElement;
hypotButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const values = display.value.split(',').map(Number);
        const result = Math.hypot(...values);
        display.value = result.toString();
    } catch (error) {
        display.value = 'Error';
    }
});
// ... (Rest of the code)