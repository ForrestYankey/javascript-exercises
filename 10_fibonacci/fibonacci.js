const fibonacci = function(num) {
    let number = parseInt(num);
    
    if (num < 0) {
        return 'OOPS'
    } 

    if (number === 1 || number === 2) {
        return 1;
    }
    
    let fib = 0;
    let num1 = 1;
    let num2 = 1;

    for (let i = 2; i < number; i++) {
        fib = num1 + num2;
        num1 = num2;
        num2 = fib;
    }
    
    return fib;
    }

// Do not edit below this line
module.exports = fibonacci;
