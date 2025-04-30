// ... (Existing code)
const powerOfThreeButton = document.getElementById('power_of_three') as HTMLButtonElement;
powerOfThreeButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const num = parseFloat(display.value);
        if (isNaN(num)) {
            throw new Error("Invalid number");
        }
        display.value = Math.pow(3, num).toString();
    }
    catch (e) {
        display.value = "Invalid input";
    }
});
// ... (Rest of existing code)