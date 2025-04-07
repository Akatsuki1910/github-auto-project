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

const calculateSphereAreaButton = document.getElementById('calculate-sphere-area') as HTMLButtonElement;
calculateSphereAreaButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const radius = parseFloat(prompt('Enter the radius:') || '0');
    if (isNaN(radius)) {
        display.value = 'Error';
    } else {
        display.value = (4 * Math.PI * radius * radius).toString();
    }
});
// ... (Rest of the code)