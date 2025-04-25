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