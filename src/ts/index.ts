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
// ... (Rest of existing code)