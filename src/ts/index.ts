// ... (Existing code)
const harmonicMeanButton = document.getElementById('harmonicMean');
harmonicMeanButton?.addEventListener('click', () => {
    const values = prompt("Enter comma-separated values for harmonic mean:", "1,2,3").split(',').map(Number);
    display.value = math.harmonicMean(values).toString();
});
//rest of code