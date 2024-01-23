let outCont = document.getElementById('outCont');

initInput();

function initInput() {
    let n1 = prompt("First number:");
    let n2 = prompt("Second number:");
    let op = prompt("Operator:");
    maths(n1, n2, op);
}

maths(n1,n2,op) {
    switch (op) {
        case '+':
            .
            break;
        case '-':
            .
            break;
        case '*':
            .
            break;
        case '/':
            .
            break;
        default:
            alert("Unknown Operator");
            return '';
      }
}