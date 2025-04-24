// ... (Existing code)
const ans = 0;
const ansButton = document.getElementById('ans');
ansButton?.addEventListener('click', () => {
    display.value = ans.toString();
});
const equalsButton = document.querySelector('.equals');
equalsButton?.addEventListener('click', () => {
    try {
        ans = math.evaluate(display.value);
        display.value = ans.toString();
    } catch (error) {
        display.value = 'Error';
    }
});