// ... (Existing code)
const seventhButton = document.getElementById('seventh') as HTMLButtonElement;
seventhButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const currentValue = parseFloat(display.value);
        display.value = Math.pow(currentValue, 7).toString();
    } catch (error) {
        display.value = "Error";
    }
});
// ... (Rest of the code)