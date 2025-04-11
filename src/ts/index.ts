// ... (Existing code)
const calculateOneThousandthButton = document.getElementById('calculate-one-thousandth') as HTMLButtonElement;
calculateOneThousandthButton.addEventListener('click', () => {
    display.value = (1/1000).toString();
});
// ... (Rest of the code)