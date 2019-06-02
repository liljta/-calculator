class Calculator {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    add() {
        return this.x + this.y;
    }
    sub() {
        return this.x - this.y;
    }
    mul() {
        return this.x * this.y;
    }
    div() {
        return this.x / this.y;
    }
}
console.log(this);


function calc(operation) {
    let x = document.getElementById('input1').value;
    let y = document.getElementById('input2').value;
    let calc = new Calculator(x, y);
    document.getElementById('input3').value = calc[operation]();
}