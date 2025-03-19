// ... (Existing code)
const cubeRootButton = document.getElementById('cube-root') as HTMLButtonElement;
cubeRootButton.addEventListener('click', () => {
    if (display.value) {
        const num = parseFloat(display.value);
        display.value = Math.cbrt(num).toString();
    }
});