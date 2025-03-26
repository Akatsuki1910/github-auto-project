// ... (Existing code)
const signButton = document.getElementById('sign');
if (signButton) {
    signButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        if (display && display.value) {
            display.value = (-parseFloat(display.value)).toString();
        }
    });
}