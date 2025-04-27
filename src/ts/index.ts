// ... (Existing code)
const compoundInterestButton = document.getElementById('calculate-compound-interest');
const display = document.getElementById('display') as HTMLInputElement;
compoundInterestButton?.addEventListener('click', () => {
    const principal = parseFloat(prompt('Enter principal amount:') || '0');
    const rate = parseFloat(prompt('Enter annual interest rate (%):') || '0') / 100;
    const time = parseFloat(prompt('Enter time in years:') || '0');
    const n = parseFloat(prompt('Enter number of times interest is compounded per year:') || '1');
    const amount = principal * Math.pow(1 + (rate / n), n * time);
    display.value = amount.toFixed(2);
});
// ... (Rest of the existing code)