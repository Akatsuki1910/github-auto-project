// ... (Existing code)
const calculateConeSurfaceAreaButton = document.getElementById('calculate-cone-surface-area') as HTMLButtonElement;
calculateConeSurfaceAreaButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const radius = parseFloat(prompt('Enter the radius:') || '0');
    const slantHeight = parseFloat(prompt('Enter the slant height:') || '0');
    if (isNaN(radius) || isNaN(slantHeight)) {
        display.value = 'Error';
    }
    else {
        display.value = (Math.PI * radius * slantHeight + Math.PI * radius * radius).toString();
    }
});
// ... (Rest of the code)