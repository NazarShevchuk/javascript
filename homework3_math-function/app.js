const askNumbers = (num1, num2, oper) => {
  const firstNumber = num1 || Number(prompt("Введите первое число"));
  const secondNumber = num2 || Number(prompt("Введите второе число"));
  const operation = oper || prompt("Введите знак операции");

  if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
    return askNumbers(firstNumber, secondNumber, operation);
  }

  return { firstNumber, secondNumber, operation };
};

const calcResult = (firstNumb, secondNumb, operation) => {
  switch (operation) {
    case "+":
      return firstNumb + secondNumb;
    case "-":
      return firstNumb - secondNumb;
    case "*":
      return firstNumb * secondNumb;
    case "/":
      return firstNumb / secondNumb;
    default:
      return null;
  }
};

const { firstNumber, secondNumber, operation } = askNumbers();

const answer = calcResult(firstNumber, secondNumber, operation);

alert(answer);
console.log(answer);
