// ... (Existing code)
const cubeButton = document.getElementById('cube') as HTMLButtonElement;
cubeButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const input = display.value;
    const number = Number(input);
    if (isNaN(number)) {
        display.value = 'Error';
        return;
    }
    const cubedNumber = number * number * number;
    display.value = cubedNumber.toString();
});
// ... (Rest of the code)