// ... (Existing code)
const log1pButton = document.getElementById('log1p') as HTMLButtonElement;
log1pButton.addEventListener('click', () => {
    try {
        const result = math.log1p(parseFloat(display.value));
        display.value = result.toString();
        ans = result;
    } catch (error) {
        display.value = 'Error';
    }
});
// ... (Rest of the code)