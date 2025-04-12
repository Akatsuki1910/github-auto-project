// ... (Existing code)
const calculateCubeButton = document.getElementById('calculate-cube') as HTMLButtonElement;
calculateCubeButton.addEventListener('click', () => {
    const value = parseFloat(prompt('Enter a value:') || '0');
    display.value = (value * value * value).toString();
});