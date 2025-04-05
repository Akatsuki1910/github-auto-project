// ... (Existing code)
const modeButton = document.getElementById('mode') as HTMLButtonElement;
modeButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const numbers = prompt('Enter numbers separated by commas:', '1,2,3,2').split(',').map(Number);
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
        display.value = mode.join(',');
    } catch (error) {
        display.value = "Error";
    }
});
// ... (Rest of the code)