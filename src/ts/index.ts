// ... (Existing code)
const cubeRootButton = document.getElementById('cube-root');
if (cubeRootButton) {
    cubeRootButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)) {
            display.value = Math.cbrt(currentValue).toString();
        }
    });
}
// ... (Existing code)