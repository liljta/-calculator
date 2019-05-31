
class Calculator {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    add() {
        return x + y;
    }
    sub() {
        return x - y;
    }
    mul() {
        return x * y;
    }
    div() {
        return x / y;
    }
}

function calc(operation) {
    let x = document.getElementById('input1').value;
    let y = document.getElementById('input2').value;
    let calc = new Calculator(x, y);
    calc.operation();
}

calc[operation]();


