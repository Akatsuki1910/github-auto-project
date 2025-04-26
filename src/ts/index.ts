// ... (Existing code)
let angleMode = 'deg'; // Initial mode is degrees
document.getElementById('deg-rad')?.addEventListener('click', () => {
    angleMode = angleMode === 'deg' ? 'rad' : 'deg';
display.value = angleMode;
});