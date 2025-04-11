// ... (Existing code)
const calculateOneMillionthButton = document.getElementById('calculate-one-millionth') as HTMLButtonElement;
calculateOneMillionthButton.addEventListener('click', () => {
    display.value = (1/1000000).toString();
});
// ... (Rest of the code)