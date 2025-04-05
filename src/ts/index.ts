// ... (Existing code)
const percentageButton = document.getElementById('percentage') as HTMLButtonElement;
percentageButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const currentValue = parseFloat(display.value);
        display.value = (currentValue / 100).toString();
    } catch (error) {
        display.value = "Error";
    }
});
// ... (Rest of the code)