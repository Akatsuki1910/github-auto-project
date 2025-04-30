// ... (Existing code)
const nthRootButton = document.getElementById('nth-root') as HTMLButtonElement;
nthRootButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const n = parseFloat(prompt("Enter the root value (n):", "2") || "2");
    try {
        const num = parseFloat(display.value);
        if (isNaN(num) || isNaN(n)) {
            throw new Error("Invalid input");
        }
        display.value = Math.pow(num, 1 / n).toString();
    }
    catch (e) {
        display.value = "Invalid input";
    }
});
// ... (Rest of existing code)