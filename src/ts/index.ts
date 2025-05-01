// ... (Existing code)
const calculateAreaOfTriangleButton = document.getElementById('calculate-area-of-triangle') as HTMLButtonElement;
calculateAreaOfTriangleButton.addEventListener('click', () => {
    const base = parseFloat(prompt('Enter base:'));
    const height = parseFloat(prompt('Enter height:'));
    if (!isNaN(base) && !isNaN(height)) {
        const area = 0.5 * base * height;
        display.value = area.toString();
    }
});
// ... (Rest of existing code)