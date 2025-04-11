// ... (Existing code)
const calculateOneHundredthButton = document.getElementById('calculate-one-hundredth') as HTMLButtonElement;
calculateOneHundredthButton.addEventListener('click', () => {
    display.value = (1/100).toString();
});
// ... (Rest of the code)