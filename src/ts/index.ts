// ... (Existing code)
const cbrtButton = document.getElementById('cbrt');
cbrtButton?.addEventListener('click', () => {
    const input = display.value;
    display.value = Math.cbrt(Number(input)).toString();
});
// ... (Rest of existing code)