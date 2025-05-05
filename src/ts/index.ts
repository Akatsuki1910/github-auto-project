// ... (Existing code)
const nCrButton = document.getElementById('nCr') as HTMLButtonElement;
nCrButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const values = display.value.split(',');
    if (values.length === 2) {
        const n = parseInt(values[0]);
        const r = parseInt(values[1]);
        if (isNaN(n) || isNaN(r) || r < 0 || n < r) {
            display.value = 'Error';
        } else {
            const result = math.combinations(n,r);
            display.value = result.toString();
        }
    } else {
        display.value = 'Error';
    }
});
// ... (Rest of existing code)