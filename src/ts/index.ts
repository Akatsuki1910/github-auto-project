// ... (Existing code)
const customFunctionButton = document.getElementById('custom-function') as HTMLButtonElement;
customFunctionButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        // Example custom function: adds 5 to the current value
        const value = parseFloat(display.value);
        const result = value + 5;
        display.value = result.toString();
    } catch (error) {
        display.value = 'Error';
    }
});
// ... (Rest of the code)