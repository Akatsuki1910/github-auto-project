// ... (Existing code)
const eighthRootButton = document.getElementById('eighth-root') as HTMLButtonElement;
eighthRootButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const num = parseFloat(display.value);
        if (isNaN(num)) {
            throw new Error("Invalid number");
        }
        display.value = Math.pow(num, 1/8).toString();
    }
    catch (e) {
        display.value = "Invalid input";
    }
});
// ... (Rest of existing code)