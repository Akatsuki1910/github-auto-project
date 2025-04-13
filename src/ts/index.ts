// ... (Existing code)
const calculateAbsoluteButton = document.getElementById('calculate-absolute') as HTMLButtonElement;
calculateAbsoluteButton.addEventListener('click', () => {
    const value = parseFloat(prompt('Enter the value for absolute:') || '0');
    display.value = Math.abs(value).toString();
});