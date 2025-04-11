// ... (Existing code)
const calculateOneThirdButton = document.getElementById('calculate-one-third') as HTMLButtonElement;
calculateOneThirdButton.addEventListener('click', () => {
    display.value = (1/3).toString();
});
// ... (Rest of the code)