// ... (Existing code)
const calculateTrapezoidAreaButton = document.getElementById('calculate-trapezoid-area') as HTMLButtonElement;
calculateTrapezoidAreaButton.addEventListener('click', () => {
    const base1 = parseFloat(prompt('Enter the first base of the trapezoid:') || '0');
    const base2 = parseFloat(prompt('Enter the second base of the trapezoid:') || '0');
    const height = parseFloat(prompt('Enter the height of the trapezoid:') || '0');
    display.value = (0.5 * (base1 + base2) * height).toString();
});