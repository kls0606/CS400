const fibonacci = function* (n, n1 = 0, n2 = 1){
    if (n === 0) {
        return n1;
    }
    yield n1;
    yield *fibonacci(n-1, n2, n1 + n2);
}

const fib = n => fibonacci(30)
fibs = fib()

const isEven = function* (){
    let count = 0;
    while (count < 6) {
        currnum = fibs.next().value
        if(currnum % 2 == 0){
            yield currnum;
        }
    }
}

const even = n => isEven()
evennums = even()

let counter = 6;
while (counter --> 0) {
    console.log(evennums.next().value)
}
