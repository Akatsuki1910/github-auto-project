// ... (Existing code)
const tenPowerButton = document.getElementById('ten-power');
tenPowerButton?.addEventListener('click', () => {
    const input = display.value;
    display.value = Math.pow(10, Number(input)).toString();
});
// ... (Rest of existing code)