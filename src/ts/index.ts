// ... (Existing code)
const calculateCylinderAreaButton = document.getElementById('calculate-cylinder-area') as HTMLButtonElement;
calculateCylinderAreaButton.addEventListener('click', () => {
    const radius = parseFloat(prompt('Enter the radius of the cylinder:') || '0');
    const height = parseFloat(prompt('Enter the height of the cylinder:') || '0');
    display.value = (2 * Math.PI * radius * height + 2 * Math.PI * radius * radius).toString();
});