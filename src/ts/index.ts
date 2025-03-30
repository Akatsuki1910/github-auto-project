// ... (Existing code)
const sumArrayButton = document.getElementById('sum-array') as HTMLButtonElement;
sumArrayButton.addEventListener('click', () => {
    const currentValue = display.value;
    const numbers = currentValue.split(',').map(Number);
    if (numbers.some(isNaN)) {
        display.value = "Invalid input for sum-array";
        return;
    }
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    display.value = sum.toString();
});