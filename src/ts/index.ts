// ... (Existing code)
const calculateQuarterButton = document.getElementById('calculate-quarter') as HTMLButtonElement;
calculateQuarterButton.addEventListener('click', () => {
    const numberString = prompt('Enter a number:');
    if (numberString) {
        const number = Number(numberString);
        const quarteredValue = number / 4;
        display.value = quarteredValue.toString();
    }
});
// ... (Rest of the code)