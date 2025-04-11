// ... (Existing code)
const calculateOneQuadrillionthButton = document.getElementById('calculate-one-quadrillionth') as HTMLButtonElement;
calculateOneQuadrillionthButton.addEventListener('click', () => {
    display.value = (1/1000000000000000).toString();
});
// ... (Rest of the code)