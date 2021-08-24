var intro = document.getElementById("viewer")
let resutado = intro.value;

function numero(value){
    intro.value += value;
}

function limpar(){
    intro.value = "";
}
function operacao (value){
    operador = value;
    intro.value += value
}

function execute (num1, num2){
    console.log(num1,num2)
}

function calcular(){
    const intro = document.getElementById("viewer").value;
    const introSplit = intro.split(operador)
    const num1 = introSplit[0];
    const num2 = introSplit[1];
}