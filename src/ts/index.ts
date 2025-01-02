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
    const calculateAtanButton = document.getElementById("calculate-atan");
    calculateAtanButton.addEventListener("click", () => {
        try {
            const num = parseFloat(display.value);
            const result = Math.atan(num);
            display.value = result.toString();
            updateHistory(`atan(${num}) = ${result}`);
            lastAnswer = result; // 最後の答えを更新
        }
        catch (error) {
            display.value = "Error";
        }
    });

    const squareRootButton = document.getElementById("square-root");
    squareRootButton.addEventListener("click", () => {
        try {
            const num = parseFloat(display.value);
            if (num < 0) {
                display.value = "Error: Negative Input";
            }
            else {
                const result = Math.sqrt(num);
                display.value = result.toString();
                updateHistory(`√(${num}) = ${result}`);
                lastAnswer = result;
            }
        }
        catch (error) {
            display.value = "Error";
        }
    });

    const percentButton = document.getElementById("percent");
    percentButton.addEventListener("click", () => {
        try {
            const num = parseFloat(display.value);
            const result = num / 100;
            display.value = result.toString();
            updateHistory(`${num}% = ${result}`);
            lastAnswer = result;
        }
        catch (error) {
            display.value = "Error";
        }
    });

    const piButton = document.getElementById("pi");
    piButton.addEventListener("click", () => {
        display.value = Math.PI.toString();
        updateHistory(`π = ${Math.PI}`);
        lastAnswer = Math.PI;
    });
});
