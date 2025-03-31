// ... (Existing code)
const log2Button = document.getElementById('log2') as HTMLButtonElement;
log2Button.addEventListener('click', () => {
    try {
        const result = math.log2(parseFloat(display.value));
        display.value = result.toString();
        ans = result;
    } catch (error) {
        display.value = 'Error';
    }
});
// ... (Rest of the code)