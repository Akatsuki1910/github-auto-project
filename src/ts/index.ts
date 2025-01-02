// ... (Existing Code)
window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code)

    // ... (Existing Code)
    // ... existing code
    // ... (rest of the code)
    let memoryValue = null;
    let lastAnswer = null;
    const history = [];
    const historyDiv = document.getElementById("history");
    const display = document.getElementById("display");
    // ... existing code ...
    const toggleHistoryButton = document.getElementById("toggle-history");
    toggleHistoryButton.addEventListener("click", () => {
        if (historyDiv.style.display === "none" || historyDiv.style.display === "") {
            historyDiv.style.display = "block";
        }
        else {
            historyDiv.style.display = "none";
        }
    });

    const updateHistory = (value) => {
        history.push(value);
        historyDiv.innerHTML = history.map(item => `<p>${item}</p>`).join('');
    };

    // ... existing code ...
    // Memory buttons
    const memoryStoreButton = document.getElementById("memory-store");
    const memoryRecallButton = document.getElementById("memory-recall");
    const memoryClearButton = document.getElementById("memory-clear");

    memoryStoreButton.addEventListener("click", () => {
        memoryValue = parseFloat(display.value);
    });

    memoryRecallButton.addEventListener("click", () => {
        if (memoryValue !== null) {
            display.value = memoryValue.toString();
        }
    });

    memoryClearButton.addEventListener("click", () => {
        memoryValue = null;
    });
    // ... existing code ...

    // Sign Change button
    // ... (rest of the code)
    const randomNumberButton = document.getElementById("random-number");
    randomNumberButton.addEventListener("click", () => {
        const randomNumber = Math.random();
        display.value = randomNumber.toString();
        updateHistory(`random = ${randomNumber}`);
    });

    const duplicateButton = document.getElementById("duplicate");
    duplicateButton.addEventListener("click", () => {
        display.value = display.value + display.value;
    });

    const swapButton = document.getElementById("swap");
    swapButton.addEventListener("click", () => {
        const currentValue = display.value;
        if (currentValue.length >= 2) {
            const swappedValue = currentValue.slice(-2) + currentValue.slice(0, -2);
            display.value = swappedValue;
            updateHistory(`swap: ${currentValue} -> ${swappedValue}`);
        }
    });

    const sumButton = document.getElementById("sum");
    sumButton.addEventListener("click", () => {
        const numbers = display.value.split(/\s*,\s*/).map(Number);
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        display.value = sum.toString();
        updateHistory(`sum(${numbers.join(',')}) = ${sum}`);
    });
});
