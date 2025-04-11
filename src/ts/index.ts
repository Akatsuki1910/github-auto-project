// ... (Existing code)
const calculateOneTenthButton = document.getElementById('calculate-one-tenth') as HTMLButtonElement;
calculateOneTenthButton.addEventListener('click', () => {
    display.value = (1/10).toString();
});
// ... (Rest of the code)