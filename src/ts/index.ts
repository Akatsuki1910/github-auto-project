// ... (Existing code)
const expm1Button = document.getElementById('expm1') as HTMLButtonElement;
expm1Button.addEventListener('click', () => {
    try {
        const result = math.expm1(parseFloat(display.value));
        display.value = result.toString();
        ans = result;
    } catch (error) {
        display.value = 'Error';
    }
});
// ... (Rest of the code)