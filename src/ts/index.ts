// ... (Existing code)
const powerTenButton = document.getElementById('power_ten') as HTMLButtonElement;
powerTenButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const result = math.pow(10, parseFloat(display.value));
        display.value = result.toString();
    } catch (error) {
        display.value = 'Error';
    }
});
// ... (Rest of the existing code)