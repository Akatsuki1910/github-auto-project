// ... (Existing code)
const sumButton = document.getElementById('sum');
sumButton?.addEventListener('click', () => {
    const values = prompt("Enter comma-separated values:", "1,2,3").split(',').map(Number);
    display.value = math.sum(values).toString();
});
const averageButton = document.getElementById('average');
averageButton?.addEventListener('click', () => {
    const values = prompt("Enter comma-separated values for average:", "1,2,3").split(',').map(Number);
    display.value = math.mean(values).toString();
});
//rest of code