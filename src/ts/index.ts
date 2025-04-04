// ... (Existing code)
const fifthButton = document.getElementById('fifth') as HTMLButtonElement;
fifthButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const currentValue = parseFloat(display.value);
        display.value = Math.pow(currentValue, 5).toString();
    } catch (error) {
        display.value = "Error";
    }
});
// ... (Rest of the code)