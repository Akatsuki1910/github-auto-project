// ... (Existing code)
const cubeRootButton = document.getElementById('cube-root') as HTMLButtonElement;
cubeRootButton.addEventListener('click', () => {
    try {
        const result = math.cbrt(parseFloat(display.value));
        display.value = result.toString();
        ans = result;
    } catch (error) {
        display.value = 'Error';
    }
});
// ... (Rest of the code)