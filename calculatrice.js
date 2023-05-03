class BaseCalculator {
    constructor() {
        this.typing = document.getElementById("typing");
        this.result = document.getElementById("result");
        this.actions = [];
        this.startTime = null;
    }
  
    add(value) {
        if (this.typing.innerHTML === "") {
            this.startTime = Date.now();
        }
        this.typing.innerHTML += value;
        this.actions.push(value);
    }
    
  
    async calculate() {
        this.expression = this.typing.innerHTML;
        let success = true;
        try {
            this.answer = eval(this.expression);
            if (this.answer === undefined) {
                throw new Error("Erreur de syntaxe");
            }
            this.result.innerHTML =
                "Résultat : " + this.expression + " = " + parseFloat(this.answer);
        } catch (error) {
            success = false;
            this.result.innerHTML = error.message;
        }
    
        const elapsedTime = Date.now() - this.startTime;
        if (success) {
            await fetch('http://localhost:3000/success', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ timeTakenMs: elapsedTime })
            });
        } else {
            await fetch('http://localhost:3000/error', {
                method: 'POST'
            });
        }
    
        this.typing.innerHTML = "";
        if (this.actions.includes("=")) {
            while (this.actions.shift() !== "=") {}
        }
        this.actions.push("=");
        this.startTime = null;
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
