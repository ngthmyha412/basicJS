"use strict";

const input = document.querySelector(".input");
const result = document.querySelector(".result");
const keys = document.querySelectorAll(".bottom span");
const delBtn = document.querySelector("#del");
const del_allBtn = document.querySelector("#del-all");
const negate = document.querySelector('#negate');
const percent = document.querySelector('#percent');

let operation = "";
let answer;
let decimalAdded = false;

const operators = ["+", "-", "x", "÷"];

function handleKeyPress (e) {
    const key = e.target.dataset.key;
    const lastChar = operation[operation.length - 1];

    if (key === "=") {
        return;
    }

    if (key === "." && decimalAdded) {
        return;
    }

    if (operators.indexOf(key) !== -1) {
        decimalAdded = false;
    }

    if (operation.length === 0 && key === "-") {
        operation += key;
        input.innerHTML = operation;
        return;
    }

    if (operation.length === 0 && operators.indexOf(key) !== -1) {
        input.innerHTML = operation;
        return;
    }

    if (operators.indexOf(lastChar) !== -1 && operators.indexOf(key) !== -1) {
        operation = operation.replace(/.$/, key);
        input.innerHTML = operation;
        return;
    }

    if (key) {
        if (key === ".") decimalAdded = true;
        operation += key;
        input.innerHTML = operation;
        return;
    }
}

function evaluate(e) {
    const key = e.target.dataset.key;
    const lastChar = operation[operation.length - 1];
    if (key === "=" && operators.indexOf(lastChar) !== -1) {
        operation = operation.slice(0, -1);
    }
    if (operation.length === 0) {
        answer = "";
        result.innerHTML = answer;
        return;
    }
    try {
        if (operation[0] === "0" && operation[1] !== "." && operation.length > 1) {
            operation = operation.slice(1);
        }
        const final = operation.replace(/x/g, "*").replace(/÷/g, "/");
        answer = +(eval(final)).toFixed(5);
        if (key === "=") {
            decimalAdded = false;
            operation = `${answer}`;
            answer = "";
            input.innerHTML = operation;
            result.innerHTML = answer;
            return;
        }
        result.innerHTML = answer;
    } catch (e) {
        if (key === "=") {
            decimalAdded = false;
            input.innerHTML = `<span class="error">${operation}</span>`;
            result.innerHTML = `<span class="error">Bad Expression</span>`;
        }
        console.log(e);
    }
}

function clearInput(e) {
    if (e.ctrlKey) {
        operation = "";
        answer = "";
        input.innerHTML = operation;
        result.innerHTML = answer;
        return;
    }
    operation = operation.slice(0, -1);
    input.innerHTML = operation;
}

function clearAllInput(e) {
    if (e.ctrlKey) {
        operation = "";
        answer = "";
        input.innerHTML = operation;
        result.innerHTML = answer;
        return;
    }
    operation = operation.slice(0, -20);
    input.innerHTML = operation;
}

function negateInput() {
    if(operation.indexOf('-') !== -1) {
        operation = operation.replace("-","");
    }
    else{
        operation = "-" + operation;
    }
    input.innerHTML = operation;
}

function percentInput() {
    operation = operation + "/100";
    answer = (eval(operation));
    operation = `${answer}`
    input.innerHTML = operation;
}

delBtn.addEventListener("click", clearInput);
del_allBtn.addEventListener("click", clearAllInput);
negate.addEventListener('click', negateInput);
percent.addEventListener('click', percentInput)

keys.forEach(key => {
    key.addEventListener("click", handleKeyPress);
    key.addEventListener("click", evaluate);
});