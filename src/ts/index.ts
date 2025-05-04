// ... (Existing code)
const calculateModeButton = document.getElementById('mode') as HTMLButtonElement;
calculateModeButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display.value) {
        try {
            const numbers = display.value.split(',').map(Number);
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
            display.value = 'Error';
        }
    }
});
// ... (Rest of existing code)