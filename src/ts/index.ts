// ... (Existing code)
const tauButton = document.getElementById('tau');
if (tauButton) {
    tauButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        display.value = (2 * Math.PI).toString();
    });
}
// ... (Existing code)