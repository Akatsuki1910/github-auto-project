// ... (Existing code)
const minButton = document.getElementById('min');
minButton?.addEventListener('click', () => {
    const values = prompt("Enter comma-separated values:", "1,2,3").split(',').map(Number);
    display.value = math.min(values).toString();
});
//rest of code