const [ , , a,operator,b] = process.argv;

let result;
switch (operator) {
    case "+":
        result=+a + +b;
        break;
    case "-":
        result = +a - +b;
        break;
    case "*":
        result = +a * +b;
        break;
    case "/":
        result = +a / +b;
        break;
    case "%":
        result = +a % +b;
        break;
    default:
        console.error("Invalid operator. Please use +, -, *, /, or %.");
        process.exit(1);
}

console.log("Result:", result);