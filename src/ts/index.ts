// ... (Existing code)
const lnButton = document.getElementById('ln');
lnButton?.addEventListener('click', () => {
    const input = display.value;
    display.value = Math.log(parseFloat(input)).toString();
});
const randomButton = document.getElementById('random');
randomButton?.addEventListener('click', () => {
    display.value = Math.random().toString();
});
const duplicateButton = document.getElementById('duplicate');
duplicateButton?.addEventListener('click', () => {
    display.value = display.value + display.value;
});
const percentToValueButton = document.getElementById('percentToValue');
percentToValueButton?.addEventListener('click', () => {
    const input = parseFloat(display.value);
    if (!isNaN(input)) {
        display.value = (input / 100).toString();
    }
});
// ... (Rest of existing code)