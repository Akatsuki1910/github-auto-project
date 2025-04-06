// ... (Existing code)
const fourthPowerButton = document.getElementById('fourth-power') as HTMLButtonElement;
fourthPowerButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const input = display.value;
    const number = Number(input);
    if (isNaN(number)) {
        display.value = 'Error';
        return;
    }
    const fourthPower = number * number * number * number; // Added fourth power functionality
    display.value = fourthPower.toString();
});
// ... (Rest of the code)