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
    const clearLastHistoryButton = document.getElementById("clear-last-history");
    clearLastHistoryButton.addEventListener("click", () => {
        history.pop();
        historyDiv.innerHTML = history.map(item => `<p>${item}</p>`).join('');
    });

    const copyDisplayButton = document.getElementById("copy-display");
    copyDisplayButton.addEventListener("click", () => {
        navigator.clipboard.writeText(display.value).then(() => {
            alert("Display value copied to clipboard!");
        }, () => {
            alert("Failed to copy display value.");
        });
    });

    // 結果をコピーする機能を追加
    const copyResultButton = document.getElementById("copy-result");
    copyResultButton.addEventListener("click", () => {
        try {
            const result = eval(display.value);
            navigator.clipboard.writeText(result.toString()).then(() => {
                alert("Result copied to clipboard!");
            }, () => {
                alert("Failed to copy result.");
            });
        } catch (error) {
            display.value = "Error";
        }
    });
    const allClearButton = document.getElementById("all-clear");
    allClearButton.addEventListener("click", () => {
        display.value = "";
        history.length = 0; //履歴もクリア
        historyDiv.innerHTML = "";
    });
    const clearEntryButton = document.getElementById("clear-entry");
    clearEntryButton.addEventListener("click", () => {
        display.value = "";
    });
    const lastAnswerButton = document.getElementById("last-answer");
    lastAnswerButton.addEventListener("click", () => {
        if (lastAnswer !== null) {
            display.value += lastAnswer.toString();
        }
    });
    // ... existing code ...
    for (let i = 0; i <= 9; i++) {
        const numberButton = document.getElementById(i.toString());
        numberButton.addEventListener("click", () => {
            display.value += i.toString();
        });
    }

    const operators = ['plus', 'minus', 'multiply', 'divide','modulus'];
    operators.forEach(operator => {
        const operatorButton = document.getElementById(operator);
        operatorButton.addEventListener('click', () => {
            display.value += operator === 'plus' ? '+' : operator === 'minus' ? '-' : operator === 'multiply' ? '*' : operator === 'modulus' ? '%' : '/';
        });
    });

    const equalsButton = document.getElementById("equals");
    equalsButton.addEventListener("click", () => {
        try {
            const result = eval(display.value);
            display.value = result.toString();
            updateHistory(`${display.value} = ${result}`);
            lastAnswer = result;
        }
        catch (error) {
            display.value = "Error";
        }
    });

    // 10のべき乗の計算機能を追加
    const tenToThePowerOfXButton = document.getElementById("ten-to-the-power-of-x");
    tenToThePowerOfXButton.addEventListener("click", () => {
        try {
            const currentValue = parseFloat(display.value);
            const result = Math.pow(10, currentValue);
            display.value = result.toString();
            updateHistory(`10^${currentValue} = ${result}`);
            lastAnswer = result;
        }
        catch (error) {
            display.value = "Error";
        }
    });
    // ... (Existing Code) ...
    const calculateEButton = document.getElementById("calculate-e");
    calculateEButton.addEventListener("click", () => {
        display.value = Math.E.toString();
    });

    const calculatePiButton = document.getElementById("calculate-pi");
    calculatePiButton.addEventListener("click", () => {
        display.value = Math.PI.toString();
    });
        const resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", () => {
        display.value = "0";
    });
    // log10の計算機能を追加
    const log10Button = document.getElementById("log10");
    log10Button.addEventListener("click", () => {
        try {
            const currentValue = parseFloat(display.value);
            const log10Value = Math.log10(currentValue);
            display.value = log10Value.toString();
            updateHistory(`log10(${currentValue}) = ${log10Value}`);
            lastAnswer = log10Value;
        }
        catch (error) {
            display.value = "Error";
        }
    });
    // 平方根の計算機能を追加
    const calculateSqrtButton = document.getElementById("calculate-sqrt");
    calculateSqrtButton.addEventListener("click", () => {
        try {
            const currentValue = parseFloat(display.value);
            const sqrtValue = Math.sqrt(currentValue);
            display.value = sqrtValue.toString();
            updateHistory(`√(${currentValue}) = ${sqrtValue}`);
            lastAnswer = sqrtValue;            
        }
        catch (error) {
            display.value = "Error";
        }
    });
    const roundDownButton = document.getElementById("round-down");
    roundDownButton.addEventListener("click", () => {
        try {
            const currentValue = parseFloat(display.value);
            const roundDownValue = Math.floor(currentValue);
            display.value = roundDownValue.toString();
            updateHistory(`roundDown(${currentValue}) = ${roundDownValue}`);
            lastAnswer = roundDownValue;
        }
        catch (error) {
            display.value = "Error";
        }
    });
    const exp2Button = document.getElementById("exp2");
    exp2Button.addEventListener("click", () => {
        try {
            const currentValue = parseFloat(display.value);
            const exp2Value = Math.pow(2, currentValue);
            display.value = exp2Value.toString();
            updateHistory(`2^${currentValue} = ${exp2Value}`);
            lastAnswer = exp2Value;
        }
        catch (error) {
            display.value = "Error";
        }
    });
    const roundToNButton = document.getElementById("round-to-n");
    const roundToNInput = document.getElementById("round-to-n-input");
    roundToNButton.addEventListener("click", () => {
        try {
            const currentValue = parseFloat(display.value);
            const n = parseInt(roundToNInput.value);
            const roundedValue = Number(currentValue.toFixed(n));
            display.value = roundedValue.toString();
            updateHistory(`round(${currentValue}, ${n}) = ${roundedValue}`);
      lastAnswer = roundedValue;
        } catch (error) {
            display.value = "Error";
        }
    });
    // ... (Existing functions)
});

