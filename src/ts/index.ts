// ... (Existing code)
const calculateHypotenuseButton = document.getElementById('calculate-hypotenuse') as HTMLButtonElement;
calculateHypotenuseButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const a = parseFloat(prompt('Enter side a:', '1'));
    const b = parseFloat(prompt('Enter side b:', '1'));
    if (isNaN(a) || isNaN(b)) {
        display.value = 'Error: Invalid input';
        return;
    }
    const hypotenuse = Math.sqrt(a * a + b * b);
    display.value = hypotenuse.toString();
});
// ... (Rest of the code)