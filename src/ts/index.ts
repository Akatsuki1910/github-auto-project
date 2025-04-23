// ... (Existing code)
const nCrButton = document.getElementById('nCr');
nCrButton?.addEventListener('click', () => {
    const currentValue = display.value;
    if (currentValue) {
        const [n, r] = currentValue.split(',').map(Number);
        if (!isNaN(n) && !isNaN(r)) {
            const result = math.combinations(n, r);
            display.value = result.toString();
        }
    }
});
//rest of code