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