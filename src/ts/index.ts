// ... (Existing code)
const cuberootButton = document.getElementById('cuberoot') as HTMLButtonElement;
cuberootButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        ans = Math.cbrt(currentValue);
        display.value = ans.toString();
        history.push(`cbrt(${currentValue}) = ${ans}`);
    }
});
// ... (rest of the code)