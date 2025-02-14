// ... (Existing code)
//Sign function (正負反転)
document.getElementById('sign')?.addEventListener('click', () => {
    const num = parseFloat(currentInput);
    currentInput = (-num).toString();
    display.value = currentInput;
});
// ... (Rest of the code)