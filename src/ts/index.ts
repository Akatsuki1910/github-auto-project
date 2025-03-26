// ... (Existing code)
const cuberootButton = document.getElementById('cuberoot');
if (cuberootButton) {
    cuberootButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        try {
            const result = math.cbrt(parseFloat(display.value));
            display.value = result.toString();
        } catch (error) {
            display.value = 'Error';
        }
    });
}
// ... (Existing code)