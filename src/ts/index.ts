// ... (Existing code)
const randomButton = document.getElementById('random');
randomButton?.addEventListener('click', () => {
    display.value = Math.random().toString();
});
const floorButton = document.getElementById('floor');
floorButton?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.floor(currentValue).toString();
    }
});