// ... (Existing code)
const eButton = document.getElementById('e');
if (eButton) {
    eButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        display.value += 'e';
    });
}
// ... (Existing code)