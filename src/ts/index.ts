// ... (Existing code)
const calculateAreaOfCircleButton = document.getElementById('calculate-area-of-circle') as HTMLButtonElement;
calculateAreaOfCircleButton.addEventListener('click', () => {
    const radius = parseFloat(display.value);
    if (!isNaN(radius)) {
        const area = Math.PI * radius * radius;
        display.value = area.toString();
    }
});
// ... (Rest of existing code)