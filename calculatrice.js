
function add(value) {
    let typing = document.getElementById("typing");
    typing.innerHTML += value;
}

function calculate() {
    let typing = document.getElementById("typing");
    let result = document.getElementById("result");
    let expression = typing.innerHTML;
    let answer = eval(expression);
    result.innerHTML = "Résultat : " + expression + " = " + parseFloat(answer).toPrecision(4);
    typing.innerHTML = '';
}

function clearText() {
    let typing = document.getElementById("typing");
    let result = document.getElementById("result");
    typing.innerHTML = '';
    result.innerHTML = '';
}