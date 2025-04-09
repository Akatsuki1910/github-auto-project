// ... (Existing code)
const calculateHalfButton = document.getElementById('calculate-half') as HTMLButtonElement;
calculateHalfButton.addEventListener('click', () => {
    const numberString = prompt('Enter a number:');
    if (numberString) {
        const number = Number(numberString);
        const halvedValue = number / 2;
        display.value = halvedValue.toString();
    }
});
// ... (Rest of the code)