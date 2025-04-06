// ... (Existing code)
const squaredButton = document.getElementById('squared') as HTMLButtonElement;
squaredButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const input = display.value;
    const number = Number(input);
    if (isNaN(number)) {
        display.value = 'Error';
        return;
    }
    const result = number * number;
    display.value = result.toString();
});
// ... (Rest of the code)