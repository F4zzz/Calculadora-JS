var cond;
var operacao;
var num1;
var num2;

function numero(n){
    var number = `${document.getElementById('display').value}`
    if(n != 0){
        if(number === '0'){
            number = ''
        }    
        if(number.length <= 9) {
            document.getElementById('display').value = `${number + n}`;
        }
        else {
            return;
        }
    }
    else{
        if(number !== '0'){
            if(number.length <= 9) {
                document.getElementById('display').value = `${number + n}`;
            }
            else {
                return;
            }
        }
        else return;       
    }
}

function limpar() {
    document.getElementById('display').value = '0'
}

function limparvar() {
    num1 = 0;
    num2 = 0;
}

function limparhist() {
    document.getElementById('hist').innerText = '';
    document.getElementById('op').innerText = '';
}

function somar(){
    cond = 1;
    operacao = "add";
    document.getElementById('op').innerText = '+'
    if(!num1){
        num1 = parseFloat(document.getElementById("display").value);
        console.log(num1);
    } else{
        num2 = parseFloat(document.getElementById("display").value);
        console.log(num2);
    }
    up();
    limpar()
}

function subtrair(){
    cond = 1;
    operacao = "sub";
    document.getElementById('op').innerText = '-'
    if(!num1){
        num1 = parseFloat(document.getElementById("display").value);
        console.log(num1);
    } else{
        num2 = parseFloat(document.getElementById("display").value);
        console.log(num2);
    }
    up();
    limpar();
}

function multiplicar(){
    cond = 1;
    operacao = "mult";
    document.getElementById('op').innerText = 'x'
    if(!num1){
        num1 = parseFloat(document.getElementById("display").value);
        console.log(num1);   
    } else{
        num2 = parseFloat(document.getElementById("display").value);
        console.log(num2);
    }
    up();
    limpar()
}

function dividir(){
    cond = 1;
    operacao = "split";
    document.getElementById('op').innerText = '/'
    if(!num1){
        num1 = parseFloat(document.getElementById("display").value);
        console.log(num1);
    } else{
        num2 = parseFloat(document.getElementById("display").value);
        console.log(num2);
    }
    up();
    limpar()
}

function sinal(){
    var sinal = parseFloat(document.getElementById("display").value);  
    if(sinal !=0){
        if(sinal > 0){
            document.getElementById("display").value = -sinal;
        } else {
            document.getElementById("display").value = sinal*-1;
        }
    }
    console.log(sinal) 
}

function ponto(){
    var ponto = document.getElementById("display").value;
    document.getElementById("display").value = ponto+'.';
    var ponto2 = document.getElementById("display").value;
    document.getElementById("display").value = ponto2;
    console.log(ponto2);
}

function bc(){
    var bc = (document.getElementById("display").value);
    var bcar = bc.split("");
    bcar.pop();
    if(bc.length === 1) {
        document.getElementById("display").value = '0';
    }
    else {
        document.getElementById("display").value = bcar.join('');
    }

}

function up() {
    document.getElementById("hist").innerText = document.getElementById("display").value;
}

function result(){
    document.getElementById("display").style.pointerEvents='all';
   
    if(operacao == "add"){
        num2 = parseFloat(document.getElementById("display").value);
        document.getElementById("display").value = num1+num2;
        lop = '+'
    } else if(operacao == "sub"){
        num2 = parseFloat(document.getElementById("display").value);
        document.getElementById("display").value = num1-num2;
        lop = '-'
    } else if(operacao == "mult"){
        num2 = parseFloat(document.getElementById("display").value);
        document.getElementById("display").value = num1*num2;
        lop = '*'
    } else if(operacao == "split"){
        num2 = parseFloat(document.getElementById("display").value);
        document.getElementById("display").value = num1/num2;
        lop = '/'
    }

    final = document.getElementById("display").value
    localStorage.clear();
    
    localStorage.setItem('val1', num1);
    localStorage.setItem('val2', num2);
    localStorage.setItem('operacao', lop)
    localStorage.setItem('result', final);

    document.getElementById("val1").innerText = localStorage.getItem('val1');
    document.getElementById("operation").innerText = localStorage.getItem('operacao');
    document.getElementById("val2").innerText = localStorage.getItem('val2');
    document.getElementById("igual").innerText = '='
    document.getElementById("valfinal").innerText = localStorage.getItem('result');


    console.log(num1);
    console.log(num2);
    num1 = 0;
    num2 = 0;
    console.log(document.getElementById("display").value)
    limparhist();
}