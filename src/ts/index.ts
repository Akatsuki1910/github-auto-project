// ... (Existing code)
const geometricMeanButton = document.getElementById('geometricMean');
geometricMeanButton?.addEventListener('click', () => {
    const values = prompt("Enter comma-separated values for geometric mean:", "1,2,3").split(',').map(Number);
    display.value = math.geometricMean(values).toString();
});
//rest of code