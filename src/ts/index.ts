// ... (Existing code)
const calculateCircleAreaButton = document.getElementById('calculate-circle-area') as HTMLButtonElement;
calculateCircleAreaButton.addEventListener('click', () => {
    const radius = parseFloat(prompt('Enter the radius of the circle:') || '0');
    display.value = (Math.PI * radius * radius).toString();
});