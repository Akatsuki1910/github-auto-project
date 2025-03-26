// ... (Existing code)
const squared2Button = document.getElementById('squared2');
if (squared2Button) {
    squared2Button.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        try {
            const result = math.pow(parseFloat(display.value), 2);
            display.value = result.toString();
        } catch (error) {
            display.value = 'Error';
        }
    });
}
// ... (Existing code)