// ... (Existing code)
const eButton = document.getElementById('e');
eButton?.addEventListener('click', () => {
    display.value = Math.E.toString();
});
const sinButton = document.getElementById('sin');
sinButton?.addEventListener('click', () => {
    const input = display.value;
    display.value = Math.sin(parseFloat(input)).toString();
});
const cosButton = document.getElementById('cos');
cosButton?.addEventListener('click', () => {
    const input = display.value;
    display.value = Math.cos(parseFloat(input)).toString();
});
const tanButton = document.getElementById('tan');
tanButton?.addEventListener('click', () => {
    const input = display.value;
    display.value = Math.tan(parseFloat(input)).toString();
});
const asinButton = document.getElementById('asin');
asinButton?.addEventListener('click', () => {
    const input = display.value;
    display.value = Math.asin(parseFloat(input)).toString();
});
const acosButton = document.getElementById('acos');
acosButton?.addEventListener('click', () => {
    const input = display.value;
    display.value = Math.acos(parseFloat(input)).toString();
});
const atanButton = document.getElementById('atan');
atanButton?.addEventListener('click', () => {
    const input = display.value;
    display.value = Math.atan(parseFloat(input)).toString();
});
// ... (Rest of existing code)