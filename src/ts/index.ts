// ... (Existing code)
window.addEventListener('load', () => {
    // ... (Existing code)
    const display = document.getElementById('display');
    // ... (Existing code)
    const cubeButton = document.getElementById('cube');
    if (cubeButton) {
        cubeButton.addEventListener('click', () => {
            const currentValue = parseFloat(display.value);
            const cubeValue = Math.pow(currentValue, 3);
            display.value = cubeValue.toString();
            console.log(`Cube calculated: ${cubeValue}`);
        });
    }
});