window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code)

    const calculateModeButton = document.getElementById("calculate-mode") as HTMLButtonElement;
    calculateModeButton.addEventListener("click", () => {
        try {
            const numbers = currentInput.split(/\+|-|\*|\//g).map(Number);
            const counts = {};
            let mode = [];
            let maxCount = 0;
            for (const num of numbers) {
                counts[num] = (counts[num] || 0) + 1;
                if (counts[num] > maxCount) {
                    mode = [num];
                    maxCount = counts[num];
                } else if (counts[num] === maxCount) {
                    mode.push(num);
                }
            }
            display.value = mode.join(', ');
            currentInput = mode.join(', ');        
        } catch (error) {
            display.value = "Error";
        }
    });
});