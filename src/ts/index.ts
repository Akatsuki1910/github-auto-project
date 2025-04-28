// ... (Existing code)
const display = document.getElementById('display') as HTMLInputElement;
const truncButton = document.getElementById('trunc');
const duplicateButton = document.getElementById('duplicate');
const squaredRootButton = document.getElementById('squared-root');
const ceilButton = document.getElementById('ceil');
// ... (Existing event listeners)
truncButton?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    display.value = Math.trunc(currentValue).toString();
});
duplicateButton?.addEventListener('click', () => {
    display.value = display.value + display.value;
});
squaredRootButton?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    const y = prompt("Enter the root (y):", "2");
    if (y !== null) {
        display.value = Math.pow(currentValue, 1 / parseFloat(y)).toString();
    }
});
ceilButton?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    display.value = Math.ceil(currentValue).toString();
});
// ... (Rest of the existing code)