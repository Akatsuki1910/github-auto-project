// ... (Existing code)
const calculateConeSurfaceAreaButton = document.getElementById('calculate-cone-surface-area') as HTMLButtonElement;
calculateConeSurfaceAreaButton.addEventListener('click', () => {
    const radius = parseFloat(prompt('Enter the radius:') || '0');
    const slantHeight = parseFloat(prompt('Enter the slant height:') || '0');
    if (isNaN(radius) || isNaN(slantHeight)) {
        display.value = 'Invalid input';
    }
    else {
        const area = Math.PI * radius * (radius + slantHeight);
        display.value = area.toString();
    }
});