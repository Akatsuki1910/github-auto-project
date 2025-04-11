// ... (Existing code)
const calculateOneBillionthButton = document.getElementById('calculate-one-billionth') as HTMLButtonElement;
calculateOneBillionthButton.addEventListener('click', () => {
    display.value = (1/1000000000).toString();
});
// ... (Rest of the code)