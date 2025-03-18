// ... (Existing code)
const cuberootButton = document.getElementById('cuberoot') as HTMLButtonElement;
cuberootButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (isNaN(currentValue)) {
        display.value = 'Invalid input';
        return;
    }
    display.value = Math.cbrt(currentValue).toString();
});