// ... (Existing code)
const sumButton = document.getElementById('sum');
sumButton?.addEventListener('click', () => {
    const values = prompt("Enter comma-separated values:", "1,2,3").split(',').map(Number);
    display.value = math.sum(values).toString();
});
//rest of code