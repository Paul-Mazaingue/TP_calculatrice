class BaseCalculator {
    constructor() {
        this.typing = document.getElementById("typing");
        this.result = document.getElementById("result");
        this.actions = [];
    }
  
    add(value) {
        this.typing.innerHTML += value;
        this.actions.push(value);
    }
  
    calculate() {
        this.expression = this.typing.innerHTML;
        try {
            this.answer = eval(this.expression);
            if(this.answer === undefined) {
                throw new Error("Erreur de syntaxe");
            }
            this.result.innerHTML =
            "Résultat : " + this.expression + " = " + parseFloat(this.answer);
        } catch (error) {
            this.result.innerHTML = error.message;
        }
        this.typing.innerHTML = "";
        if (this.actions.includes("=")) {
            while (this.actions.shift() !== "=") {}
        }
        this.actions.push("=");
    }
  
    remove() {
        // S'il y a déjà un calcul en cours
        if (this.typing.innerHTML.length > 0) {
            this.typing.innerHTML = this.typing.innerHTML.slice(0, -1);
            this.actions.pop();
        // S'il n'y a pas de calcul en cours mais qu'il y a déjà eu un calcul
        } else if (this.actions[this.actions.length - 1] === "=") {
            this.result.innerHTML = "";
            let i = 0;
            while (this.actions[i] !== "=") {
                const lastAction = this.actions[i];
                this.typing.innerHTML += lastAction;
                i++;
            }
            this.actions.pop();
        }
    }
  
    clearText() {
        this.typing.innerHTML = "";
        this.result.innerHTML = "";
        this.actions = [];
    }
}
