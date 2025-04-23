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
const productButton = document.getElementById('product');
productButton?.addEventListener('click', () => {
    const values = prompt("Enter comma-separated values for product:", "1,2,3").split(',').map(Number);
    display.value = math.prod(values).toString();
});
const modeButton = document.getElementById('mode');
modeButton?.addEventListener('click', () => {
    const values = prompt("Enter comma-separated values for mode:", "1,2,3,2").split(',').map(Number);
    display.value = math.mode(values).toString();
});
const varianceButton = document.getElementById('variance');
varianceButton?.addEventListener('click', () => {
    const values = prompt("Enter comma-separated values for variance:", "1,2,3").split(',').map(Number);
    display.value = math.variance(values).toString();
});
//rest of code