// ... (Existing code)
const calculateCircleAreaButton = document.getElementById('calculate-circle-area') as HTMLButtonElement;
calculateCircleAreaButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const radius = parseFloat(prompt('Enter the radius:', '1'));
    if (isNaN(radius)) {
        display.value = 'Error: Invalid input';
        return;
    }
    const area = Math.PI * radius * radius;
    display.value = area.toString();
});
// ... (Rest of the code)