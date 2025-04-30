// ... (Existing code)
const powerOfFourButton = document.getElementById('power_of_four') as HTMLButtonElement;
powerOfFourButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const num = parseFloat(display.value);
        if (isNaN(num)) {
            throw new Error("Invalid number");
        }
        display.value = Math.pow(4, num).toString();
    }
    catch (e) {
        display.value = "Invalid input";
    }
});
// ... (Rest of existing code)