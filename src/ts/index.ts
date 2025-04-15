// ... (Existing code)
const cbrtButton = document.getElementById('cbrt') as HTMLButtonElement;
cbrtButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        ans = Math.cbrt(currentValue);
        display.value = ans.toString();
        history.push(`cbrt(${currentValue}) = ${ans}`);
    }
});