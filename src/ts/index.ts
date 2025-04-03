// ... (Existing code)
const nthRootButton = document.getElementById('nth-root') as HTMLButtonElement;
nthRootButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
    let y = prompt("Enter the root (y):", "2");
    if (y === null || y.trim() === "") {
        y = "2";
    }
    try {
        const x = parseFloat(display.value);
        const result = Math.pow(x, 1 / parseFloat(y));
        currentExpressionDisplay.textContent = `${x}^(1/${y})`;
        display.value = result.toString();
    }
    catch (error) {
        display.value = "Error";
    }
});
// ... (Rest of the code)