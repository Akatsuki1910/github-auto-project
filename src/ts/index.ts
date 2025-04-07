// ... (Existing code)
const cubeRootButton = document.getElementById('cubeRoot') as HTMLButtonElement;
cubeRootButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
    try {
        const inputValue = display.value;
        if (inputValue) {
            const num = Number(inputValue);
            const result = math.cbrt(num);
            currentExpressionDisplay.textContent = `∛(${inputValue})`;
            display.value = result.toString();
        }
    }
    catch (error) {
        display.value = 'Error';
    }
});
// ... (Rest of the code)