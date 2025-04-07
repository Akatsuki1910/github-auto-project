// ... (Existing code)
const calculateCircleAreaButton = document.getElementById('calculate-circle-area') as HTMLButtonElement;
calculateCircleAreaButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const radius = parseFloat(prompt('Enter the radius:') || '0');
    if (isNaN(radius)) {
        display.value = 'Error';
    } else {
        display.value = (Math.PI * radius * radius).toString();
    }
});
// ... (Rest of the code)