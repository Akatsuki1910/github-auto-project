// ... (Existing code)
const ninthButton = document.getElementById('ninth') as HTMLButtonElement;
ninthButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const currentValue = parseFloat(display.value);
        display.value = Math.pow(currentValue, 9).toString();
    } catch (error) {
        display.value = "Error";
    }
});
// ... (Rest of the code)