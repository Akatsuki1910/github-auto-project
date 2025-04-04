// ... (Existing code)
const modeButton = document.getElementById('mode') as HTMLButtonElement;
modeButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
    try {
        const numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
        const counts = {};
        let maxCount = 0;
        let modes = [];
        for (const num of numbers) {
            counts[num] = (counts[num] || 0) + 1;
            if (counts[num] > maxCount) {
                maxCount = counts[num];
                modes = [num];
            }
            else if (counts[num] === maxCount) {
                modes.push(num);
            }
        }
        currentExpressionDisplay.textContent = `mode(${numbers.join(', ')})`;
        display.value = modes.join(', ');
    }
    catch (error) {
        display.value = "Error";
    }
});
// ... (Rest of the code)