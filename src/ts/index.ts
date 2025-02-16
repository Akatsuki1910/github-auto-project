// ... (Existing code)
// n乗根機能
document.getElementById('nth-root')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const num = parseFloat(display.value);
    if (isNaN(num)) {
        alert('Invalid input');
        return;
    }
    const n = parseFloat(prompt('Enter the root (n):', '2'));
    if (isNaN(n)) {
        alert('Invalid root');
        return;
    }
    display.value = Math.pow(num, 1 / n).toString();
});