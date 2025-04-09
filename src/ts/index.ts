// ... (Existing code)
const calculateNthRootButton = document.getElementById('calculate-nth-root') as HTMLButtonElement;
calculateNthRootButton.addEventListener('click', () => {
    const numberString = prompt('Enter the number:');
    const rootString = prompt('Enter the root (e.g., 2 for square root, 3 for cube root):');
    if (numberString && rootString) {
        const number = Number(numberString);
        const root = Number(rootString);
        const nthRoot = Math.pow(number, 1 / root);
        display.value = nthRoot.toString();
    }
});
// ... (Rest of the code)