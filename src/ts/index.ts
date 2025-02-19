// ... (Existing code)
//Fibonacci
// ... (Existing code)
document.getElementById('ten-power')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        try {
            const num = parseFloat(display.value);
            display.value = Math.pow(10, num).toString();
        } catch (error) {
            display.value = "Error";
        }
    }
});