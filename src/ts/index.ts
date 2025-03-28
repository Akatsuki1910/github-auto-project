// ... (Existing code)
const cubeRootButton = document.getElementById('cube-root');
cubeRootButton?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (isNaN(currentValue)) {
        display.value = 'Invalid input';
        return;
    }
    const cubeRootValue = Math.cbrt(currentValue);
    display.value = cubeRootValue.toString();
});
//...(rest of the code)