// ... (Existing code)
const lnButton = document.getElementById('ln');
lnButton?.addEventListener('click', () => {
    const input = display.value;
    display.value = Math.log(parseFloat(input)).toString();
});
const randomButton = document.getElementById('random');
randomButton?.addEventListener('click', () => {
    display.value = Math.random().toString();
});
// ... (Rest of existing code)