// ... (Existing code)
const calculateOneTrillionthButton = document.getElementById('calculate-one-trillionth') as HTMLButtonElement;
calculateOneTrillionthButton.addEventListener('click', () => {
    display.value = (1/1000000000000).toString();
});
// ... (Rest of the code)