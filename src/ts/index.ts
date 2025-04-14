// ... (Existing code)
const memorySubtractButton = document.getElementById('memory-subtract') as HTMLButtonElement;
memorySubtractButton.addEventListener('click', () => {
    memoryValue -= parseFloat(display.value);
    display.value = memoryValue.toString();
});