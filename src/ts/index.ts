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

    const operators = ['plus', 'minus', 'multiply', 'divide'];
    operators.forEach(operator => {
        const operatorButton = document.getElementById(operator);
        operatorButton.addEventListener('click', () => {
            display.value += operator === 'plus' ? '+' : operator === 'minus' ? '-' : operator === 'multiply' ? '*' : '/';
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

    // ... (Existing Code) ...

    // 逆数の計算機能を追加
    const reciprocalButton = document.getElementById("reciprocal");
    reciprocalButton.addEventListener("click", () => {
        try {
            const currentValue = parseFloat(display.value);
            const reciprocalValue = 1 / currentValue;
            display.value = reciprocalValue.toString();
            updateHistory(`1/${currentValue} = ${reciprocalValue}`);
        } catch (error) {
            display.value = "Error";
        }
    });
     // x²の計算機能を追加
    const squareButton = document.getElementById("square");
    squareButton.addEventListener("click", () => {
      try {
          const currentValue = parseFloat(display.value);
          const squareValue = Math.pow(currentValue,2);
          display.value = squareValue.toString();
          updateHistory(`${currentValue}² = ${squareValue}`);
         lastAnswer = squareValue;
      } catch (error) {
            display.value = "Error";
        }
    });
 // 立方根の計算機能を追加
    const cubeRootButton = document.getElementById("cube-root");
    cubeRootButton.addEventListener("click", () => {
        try {
            const currentValue = parseFloat(display.value);
            const cubeRootValue = Math.cbrt(currentValue);
            display.value = cubeRootValue.toString();
            updateHistory(`∛${currentValue} = ${cubeRootValue}`);
            lastAnswer = cubeRootValue;
        }
        catch (error) {
            display.value = "Error";
        }
    });
    // 階乗の計算機能を追加
    const factorialButton = document.getElementById("factorial");
    factorialButton.addEventListener("click", () => {
        try {
            const currentValue = parseFloat(display.value);
            if (currentValue < 0) {
                throw new Error("Cannot calculate factorial of a negative number.");
            }
            const factorialValue = factorial(currentValue);
            display.value = factorialValue.toString();
            updateHistory(`${currentValue}! = ${factorialValue}`);
            lastAnswer = factorialValue;
        } catch (error) {
            display.value = "Error";
        }
    });
    function factorial(n) {
        if (n === 0) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }
    // 切り上げ機能を追加
    const roundUpButton = document.getElementById("round-up");
    roundUpButton.addEventListener("click", () => {
        try {
            const currentValue = parseFloat(display.value);
            const roundUpValue = Math.ceil(currentValue);
            display.value = roundUpValue.toString();
            updateHistory(`roundUp(${currentValue}) = ${roundUpValue}`);
            lastAnswer = roundUpValue;
        }
        catch (error) {
            display.value = "Error";
        }
    });
    // n乗根の計算機能を追加
    const nthRootButton = document.getElementById("nth-root");
    nthRootButton.addEventListener("click", () => {
        try {
            const n = parseFloat(prompt("Enter the root (n):")); // nの値を入力
            const currentValue = parseFloat(display.value);
            const nthRootValue = Math.pow(currentValue, 1/n);
            display.value = nthRootValue.toString();
            updateHistory(`${n}√${currentValue} = ${nthRootValue}`);
            lastAnswer = nthRootValue;
        }
        catch (error) {
            display.value = "Error";
        }
    });
});
