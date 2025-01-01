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

    // 現在の時刻を表示する機能を追加
    const currentTimestampButton = document.getElementById("current-timestamp");
    currentTimestampButton.addEventListener("click", () => {
        const timestamp = new Date().toLocaleString();
        display.value = timestamp;
        updateHistory(`Timestamp: ${timestamp}`);
    });

    // パーセント計算機能を追加
    const percentageButton = document.getElementById("percentage");
    percentageButton.addEventListener("click", () => {
        try {
            const currentValue = parseFloat(display.value);
            const percentageValue = currentValue / 100;
            display.value = percentageValue.toString();
            updateHistory(`${currentValue}% = ${percentageValue}`);
        } catch (error) {
            display.value = "Error";
        }
    });

    //平方根の計算機能を追加
    const sqrtButton = document.getElementById("sqrt");
    sqrtButton.addEventListener("click", () => {
        try {
            const currentValue = parseFloat(display.value);
            const sqrtValue = Math.sqrt(currentValue);
            display.value = sqrtValue.toString();
            updateHistory(`√(${currentValue}) = ${sqrtValue}`);
        }
        catch (error) {
            display.value = "Error";
        }
    });

    // 階乗計算機能を追加
    const factorialButton = document.getElementById("factorial");
    factorialButton.addEventListener("click", () => {
        try {
            const currentValue = parseFloat(display.value);
            const factorialValue = factorial(currentValue);
            display.value = factorialValue.toString();
            updateHistory(`factorial(${currentValue}) = ${factorialValue}`);
        } catch (error) {
            display.value = "Error";
        }
    });

    function factorial(n) {
        if (n < 0) {
            return "Error: Negative input";
        } else if (n === 0) {
            return 1;
        } else {
            let result = 1;
            for (let i = 1; i <= n; i++) {
                result *= i;
            }
            return result;
        }
    }

    //DELボタンの追加
    const deleteButton = document.getElementById("delete");
    deleteButton.addEventListener("click", () => {
        display.value = display.value.slice(0, -1);
    });

    // 小数点ボタンの追加
    const decimalButton = document.getElementById("decimal");
    decimalButton.addEventListener("click", () => {
        if (!display.value.includes('.')) {
            display.value += '.';
        }
    });
     // 正負反転ボタンの追加
    const plusminusButton = document.getElementById("plusminus");
    plusminusButton.addEventListener("click", () => {
        display.value = (parseFloat(display.value) * -1).toString();
    });

    // べき乗計算機能を追加
    const powerButton = document.getElementById("power");
    powerButton.addEventListener("click", () => {
        try {
            const base = parseFloat(display.value);
            display.value = ""; // 一旦クリア
            const exponentInput = () => new Promise((resolve) => {
                const exponent = prompt("Enter exponent:");
                resolve(parseFloat(exponent));
            });
            exponentInput().then((exponent) => {
                const result = Math.pow(base, exponent);
                display.value = result.toString();
                updateHistory(`${base}^${exponent} = ${result}`);
            });
        } catch (error) {
            display.value = "Error";
        }
    });
});
