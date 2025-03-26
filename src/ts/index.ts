// ... (Existing code)
const signChangeButton = document.getElementById('sign-change');
if (signChangeButton) {
    signChangeButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        try {
            const currentValue = parseFloat(display.value);
            display.value = (-currentValue).toString();
        } catch (error) {
            display.value = 'Error';
        }
    });
}
// ... (Existing code)