// ... (Existing code)
const cubeRootButton = document.getElementById('cube-root') as HTMLButtonElement;
cubeRootButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display.value) {
        try {
            const num = parseFloat(display.value);
            const result = math.cbrt(num);
            display.value = result.toString();
        } catch (error) {
            display.value = 'Error';
        }
    }
});
// ... (Rest of existing code)