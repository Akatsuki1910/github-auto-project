// ... (Existing code)
const maxButton = document.getElementById('max');
maxButton?.addEventListener('click', () => {
    const values = prompt("Enter comma-separated values:", "1,2,3").split(',').map(Number);
    display.value = math.max(values).toString();
});
//rest of code