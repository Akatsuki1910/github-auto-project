// ... (Existing code)
const cuberootButton = document.getElementById('cuberoot');
cuberootButton?.addEventListener('click', () => {
    const currentValue = display.value;
    if (currentValue) {
        const result = math.cbrt(Number(currentValue));
        display.value = result.toString();
    }
});
//rest of code