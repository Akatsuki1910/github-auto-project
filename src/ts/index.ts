// ... (Existing code)
const calculateCircleAreaButton = document.getElementById('calculate-circle-area') as HTMLButtonElement;
calculateCircleAreaButton.addEventListener('click', () => {
    const radius = parseFloat(prompt('Enter the radius:') || '0');
    if (isNaN(radius)) {
        display.value = 'Invalid input';
    }
    else {
        const area = Math.PI * radius * radius;
        display.value = area.toString();
    }
});