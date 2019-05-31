/*let registry = document.querySelector('.registry');

function RemoveItem(e) {
    //console.log(this.dataset.id);
    localStorage.removeItem(`item_${this.dataset.id}`);
    this.remove();
    //console.log(registry.childElementCount);
    if (registry.childElementCount === 0){
        document.querySelector('.load-data').disabled = false;
    }
}

function Request(){
    let url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
        .then(response =>{
            console.log("Response: ", response);
            return response.json()
        })
        .then(data =>{
            console.log("Data: ", data);
            registry.innerHTML = '';
            let elem = data.map(item =>{
                localStorage.setItem(`item_${item.id}`, item);
                let li = document.createElement('li');
                li.setAttribute('data-id', item.id);
                li.addEventListener('click', RemoveItem);
                li.innerHTML = `${item.id}, ${item.name}, ${item.email}`;
                registry.appendChild(li);
                return item;
            });
            document.querySelector('.load-data').disabled = true;
        })
}*/

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
console.log(this);


function calc(operation) {
    let x = document.getElementById('input1').value;
    let y = document.getElementById('input2').value;
    let calc = new Calculator(x, y);
    calc.operation();
}




