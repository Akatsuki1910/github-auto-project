// ... (Existing code)
const signButton = document.getElementById('sign');
signButton?.addEventListener('click', () => {
    const currentValue = display.value;
    if (currentValue) {
        const result = Math.sign(Number(currentValue));
        display.value = result.toString();
    }
});
//rest of code