// ... (Existing code)
const calculateModButton = document.getElementById('calculate-mod') as HTMLButtonElement;
calculateModButton.addEventListener('click', () => {
    const value1 = parseFloat(prompt('Enter the first value:') || '0');
    const value2 = parseFloat(prompt('Enter the second value:') || '0');
    display.value = (value1 % value2).toString();
});