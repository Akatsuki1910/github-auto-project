// ... (Existing code)
const signButton = document.getElementById('sign') as HTMLButtonElement;
signButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        ans = Math.sign(currentValue);
        display.value = ans.toString();
        history.push(`sign(${currentValue}) = ${ans}`);
    }
});
// ... (rest of the code)