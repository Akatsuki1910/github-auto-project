// ... (Existing code)
const inverseTangentButton = document.getElementById('inverse-tangent') as HTMLButtonElement;
inverseTangentButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display.value) {
        try {
            const num = parseFloat(display.value);
            const result = math.atan(num);
            display.value = result.toString();
        } catch (error) {
            display.value = 'Error';
        }
    }
});
// ... (Rest of existing code)