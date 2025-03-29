// ... (Existing code)
const display = document.getElementById('display') as HTMLInputElement;
const memory = 0;
const memoryPlusButton = document.createElement('button');
memoryPlusButton.textContent = 'M+';
memoryPlusButton.addEventListener('click', () => {
    memory += parseFloat(display.value);
});
document.getElementById('calculator')?.appendChild(memoryPlusButton);