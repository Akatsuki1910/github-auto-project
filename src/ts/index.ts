// ... (Existing code)
const naturalLogButton = document.getElementById('natural-log') as HTMLButtonElement;
naturalLogButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const num = parseFloat(display.value);
    if (!isNaN(num) && num > 0) {
        display.value = Math.log(num).toString();
    }
    else {
        display.value = "Invalid input";
    }
});
// ... (Rest of existing code)