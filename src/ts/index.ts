// ... (Existing code)
const doubleButton = document.getElementById('double');
doubleButton?.addEventListener('click', () => {
    const input = display.value;
    display.value = (Number(input) * 2).toString();
});
const tripleButton = document.getElementById('triple');
tripleButton?.addEventListener('click', () => {
    const input = display.value;
    display.value = (Number(input) * 3).toString();
});
const inverseButton = document.getElementById('inverse');
inverseButton?.addEventListener('click', () => {
    const input = display.value;
    const result = 1 / Number(input);
    display.value = isFinite(result) ? result.toString() : "Error";
});
// ... (Rest of existing code)