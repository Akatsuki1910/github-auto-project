// ... (Existing code)
const ninthRootButton = document.getElementById('ninth-root') as HTMLButtonElement;
ninthRootButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const num = parseFloat(display.value);
        if (isNaN(num)) {
            throw new Error("Invalid number");
        }
        display.value = Math.pow(num, 1/9).toString();
    }
    catch (e) {
        display.value = "Invalid input";
    }
});
// ... (Rest of existing code)