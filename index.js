let outCont = document.getElementById('outCont');


function initInput() {
    let n1 = prompt("First number:");
    let op = prompt("Operator:");
    let n2 = prompt("Second number:");
    maths(n1,op,n2);
}

function maths(n1,op,n2) {
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    switch (op) {
        case '+':
            alert(n1+n2);
            break;
        case '-':
            alert(n1-n2);
            break;
        case '*':
            alert(n1*n2);
            break; 
        case '/':
            alert(n1/n2);
            break;
        default:
            alert("Unknown Operator");
            return '';
      }
}





document.addEventListener("DOMContentLoaded", () => {
    let outCont = document.getElementById('outCont');
    let num = document.getElementById('num');
    let ops = document.getElementById('ops');
    let equate = document.getElementById('equate');
    let c = document.getElementById('clear');
    let n1 = '';
    let op = '';
    let n2 = '';
    if(num !== null && outCont !== null) {
        carryToListener(num, outCont);
    }
    if(ops !== null && outCont !== null) {
        carryToListener(ops, outCont);
    }
    if(equate !== null && outCont !== null) {
        carryToListener(equate, outCont);
    }
    if(c !== null && outCont !== null) {
        carryToListener(c, outCont);
    }
})

function carryToListener(btnCont, outCont) {
    if(btnCont.id == "equate" || btnCont.id == "clear") {
        addListener(btnCont, outCont);
    }
    for(i = 0; i < btnCont.children.length; i++) {
        addListener(btnCont.children[i], outCont);
    }
}

function addListener(btn, outCont) {
    btn.addEventListener('click', () => {
        if(btn.id == "clear") {
            n1 = '';
            op = '';
            n2 = '';
            outCont.value = '';
        }
        if(btn.parentElement.id == "num") {outCont.value += btn.innerText;}
        if(btn.parentElement.id == "ops") {
            op = btn.innerText;
            n1 = outCont.value;
            outCont.value = '';
        }
        if(btn.id == "equate") {
            n2 = outCont.value;
            mathamaticals(n1,op,n2,outCont);
        }
        
    })
}

function mathamaticals(n1,op,n2,outCont) {
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    switch (op) {
        case '+':
            outCont.value = (n1+n2);
            break;
        case '-':
            outCont.value = (n1-n2);
            break;
        case '*':
            outCont.value = (n1*n2);
            break; 
        case '/':
            outCont.value = (n1/n2);
            break;
        default:
            outCont.value = ("(Error: 01) Try clearing and retyping equation");
            return '';
      }
}