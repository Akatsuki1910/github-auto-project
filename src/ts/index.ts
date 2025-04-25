// ... (Existing code)
//Added quantileSeq functionality
document.getElementById('quantileSeq')?.addEventListener('click', () => {
    try {
        const values = display.value.split(',').map(Number);
        const probability = 0.5; // Example probability value
        display.value = math.quantileSeq(values, probability).toString();
    }
    catch (error) {
        display.value = 'Error: ' + error.message;
    }
});
// Added covariance functionality
document.getElementById('covariance')?.addEventListener('click', () => {
    try {
        const [arr1, arr2] = display.value.split(';').map(s => s.split(',').map(Number));
        display.value = math.covariance(arr1, arr2).toString();
    }
    catch (error) {
        display.value = "Error: " + error.message;
    }
});
//Added correlation functionality
document.getElementById('correlation')?.addEventListener('click', () => {
    try {
        const [arr1, arr2] = display.value.split(';').map(s => s.split(',').map(Number));
        display.value = math.correlation(arr1, arr2).toString();
    }
    catch (error) {
        display.value = "Error: " + error.message;
    }
});
//Added stddev functionality
document.getElementById('stddev')?.addEventListener('click', () => {
    try {
        const values = display.value.split(',').map(Number);
        display.value = math.std(values).toString();
    }
    catch (error) {
        display.value = 'Error: ' + error.message;
    }
});
//Added norm functionality
document.getElementById('norm')?.addEventListener('click', () => {
    try {
        const values = display.value.split(',').map(Number);
        display.value = math.norm(values).toString();
    }
    catch (error) {
        display.value = 'Error:' + error.message;
    }
});
//Added Cumulative Sum functionality
document.getElementById('cumulativeSum')?.addEventListener('click', () => {
    try {
        const values = display.value.split(',').map(Number);
        const cumulativeSum = math.cumsum(values);
        display.value = cumulativeSum.toString();
    }
    catch (error) {
        display.value = 'Error:' + error.message;
    }
});
//Added Gamma functionality
document.getElementById('gamma')?.addEventListener('click', () => {
    try {
        const value = parseFloat(display.value);
        display.value = math.gamma(value).toString();
    }
    catch (error) {
        display.value = 'Error: ' + error.message;
    }
});
//Added Combination functionality
document.getElementById('combination')?.addEventListener('click', () => {
    try {
        const [n, k] = display.value.split(',').map(Number);
        display.value = math.combinations(n, k).toString();
    }
    catch (error) {
        display.value = 'Error: ' + error.message;
    }
});