// ... (Existing code)
const isOddButton = document.getElementById('isOdd') as HTMLButtonElement;
isOddButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const num = parseInt(display.value);
    if (isNaN(num)) {
        display.value = 'Error: Invalid input';
        return;
    }
    display.value = (num % 2 !== 0).toString();
});
// ... (Rest of the code)