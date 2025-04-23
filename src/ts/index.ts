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
const ceilButton = document.getElementById('ceil');
ceilButton?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.ceil(currentValue).toString();
    }
});
const truncButton = document.getElementById('trunc');
truncButton?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.trunc(currentValue).toString();
    }
});