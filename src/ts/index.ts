// ... (Existing code)
const exponentButton = document.getElementById('exponent') as HTMLButtonElement;
exponentButton.addEventListener('click', () => {
    // Handle exponent operation (x^y)
    // Implementation for this functionality needs to be added
    display.value += '^';
});
const cuberootButton = document.getElementById('cuberoot') as HTMLButtonElement;
cuberootButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.cbrt(currentValue).toString();
    }
    else {
        display.value = 'Invalid input';
    }
});
// ... (Rest of existing code)