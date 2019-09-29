const evaluate = input => {
    let operator = input.charAt(1);
    switch (operator) {
        case '+':
            return nums => (nums.charAt(0) - '0') + (nums.charAt(2) - '0');
        case '-':
            return nums => (nums.charAt(0) - '0') - (nums.charAt(2) - '0');
        case '*':
            return nums => (nums.charAt(0) - '0') * (nums.charAt(2) - '0');
        case '/':g
            return nums => (nums.charAt(0) - '0') / (nums.charAt(2) - '0');
        case '%':
            return nums => (nums.charAt(0) - '0') % (nums.charAt(2) - '0');
    }
};

const expression = '8%3';
let operator = evaluate(expression);
console.log(`${expression} = ${operator(expression)}`);
