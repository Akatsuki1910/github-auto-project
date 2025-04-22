// ... (Existing code)
const doubleButton = document.getElementById('double');
doubleButton?.addEventListener('click', () => {
    const input = display.value;
    display.value = (Number(input) * 2).toString();
});
// ... (Rest of existing code)