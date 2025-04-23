// ... (Existing code)
const cubeButton = document.getElementById('cube');
cubeButton?.addEventListener('click', () => {
    const currentValue = display.value;
    if (currentValue) {
        const result = Math.pow(Number(currentValue), 3);
        display.value = result.toString();
    }
});
//rest of code