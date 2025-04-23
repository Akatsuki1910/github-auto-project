// ... (Existing code)
const gcdButton = document.getElementById('gcd');
gcdButton?.addEventListener('click', () => {
    const values = prompt("Enter comma-separated values for gcd:", "12,18").split(',').map(Number);
    display.value = math.gcd(values).toString();
});
//rest of code