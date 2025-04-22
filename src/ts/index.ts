// ... (Existing code)
const sinButton = document.getElementById('sin');
sinButton?.addEventListener('click', () => {
    const input = display.value;
    display.value = Math.sin(parseFloat(input)).toString();
});
// ... (Rest of existing code)