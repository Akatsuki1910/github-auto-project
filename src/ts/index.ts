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
    const signChangeButton = document.getElementById("sign-change");
    signChangeButton.addEventListener("click", () => {
      if (display.value !== "") {
        display.value = (parseFloat(display.value) * -1).toString();
      }
    });
    //Cube Root button
    const cubeRootButton = document.getElementById("cube-root");
    cubeRootButton.addEventListener("click", () => {
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)) {
            const result = Math.cbrt(currentValue);
            display.value = result.toString();
            updateHistory(`∛(${currentValue}) = ${result}`);
        }
    });
    // ... rest of the code
});
