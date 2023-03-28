class BaseCalculator {
    constructor() {
      this.typing = document.getElementById("typing");
      this.result = document.getElementById("result");
    }
  
    add(value) {
      this.typing.innerHTML += value;
    }
  
    calculate() {
      this.expression = this.typing.innerHTML;
      this.answer = eval(this.expression);
      this.result.innerHTML =
        "Résultat : " + this.expression + " = " + parseFloat(this.answer);
      this.typing.innerHTML = "";
    }
  
    remove() {
      this.typing.innerHTML = this.typing.innerHTML.slice(0, -1);
    }
  
    clearText() {
      this.typing.innerHTML = "";
      this.result.innerHTML = "";
    }
  }