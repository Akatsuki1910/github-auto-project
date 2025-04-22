// ... (Existing code)
const lnButton = document.getElementById('ln');
lnButton?.addEventListener('click', () => {
    const input = display.value;
    display.value = Math.log(parseFloat(input)).toString();
});
// ... (Rest of existing code)