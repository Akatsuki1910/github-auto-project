// ... (Existing code)
const calculateHypotenuseButton = document.getElementById('calculate-hypotenuse') as HTMLButtonElement;
calculateHypotenuseButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const a = parseFloat(prompt('Enter side a:') || '0');
    const b = parseFloat(prompt('Enter side b:') || '0');
    if (isNaN(a) || isNaN(b)) {
        display.value = 'Error';
    } else {
        display.value = Math.sqrt(a * a + b * b).toString();
    }
});
// ... (Rest of the code)