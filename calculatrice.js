
function add(value) {
    let typing = document.getElementById("typing");
    typing.innerHTML += value;
}

function calculate() {
    let typing = document.getElementById("typing");
    let result = document.getElementById("result");
    let expression = typing.innerHTML;
    let answer = eval(expression);
    result.innerHTML = "Résultat : " + expression + " = " + parseFloat(answer).toPrecision(10);
    typing.innerHTML = '';
}

function remove(){
    let typing = document.getElementById("typing");
    typing.innerHTML = typing.innerHTML.slice(0, -1);
}

function clearText() {
    let typing = document.getElementById("typing");
    let result = document.getElementById("result");
    typing.innerHTML = '';
    result.innerHTML = '';
}