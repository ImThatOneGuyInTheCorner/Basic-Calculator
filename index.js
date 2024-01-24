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
    if(num !== null && outCont !== null) {
        addListener(num, outCont);
    }
    if(num !== null && outCont !== null) {
        // To Function that adds event listeners for click
    }
    if(equate !== null && outCont !== null) {
        // To Function that adds event listeners for click
    }
})

function addListener(btnCont, outCont) {
    for(i = 0; i < btnCont.children.length; i++) {
        btnCont.children[i].addEventListener('click', go(btnCont.children[i].value)) 
    }
}

function go(val) {
    alert(val);
}