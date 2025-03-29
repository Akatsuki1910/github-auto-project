// ... (Existing code)
const display = document.getElementById('display') as HTMLInputElement;
let memory = 0;
const memoryPlusButton = document.getElementById('memory-plus') as HTMLButtonElement;
memoryPlusButton.addEventListener('click', () => {
    memory += parseFloat(display.value);
    console.log("Memory:", memory); // Add this line
});
