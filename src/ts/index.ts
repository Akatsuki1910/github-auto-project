// ... (Existing code)
const calculateEButton = document.getElementById('calculate-e') as HTMLButtonElement;
calculateEButton.addEventListener('click', () => {
    display.value = math.e.toString();
});
// ... (Rest of the code)