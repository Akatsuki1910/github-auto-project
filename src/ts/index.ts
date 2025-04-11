// ... (Existing code)
const calculateTwoThirdsButton = document.getElementById('calculate-two-thirds') as HTMLButtonElement;
calculateTwoThirdsButton.addEventListener('click', () => {
    display.value = (2/3).toString();
});
// ... (Rest of the code)