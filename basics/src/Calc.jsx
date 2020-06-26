function add(a, b) {
    return (a + b);
}

function sub(a, b) {
    return (a - b);
}

function div(a, b) {
    let num = a / b;
    num = num.toFixed(2);
    return (num);
}

function mult(a, b) {
    return (a * b);
}

export { add, sub, div, mult };