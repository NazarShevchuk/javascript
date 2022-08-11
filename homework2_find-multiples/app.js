const multiplesnumber = (n, maxNum) => {
  const number = [];
  for (let i = 1; i < maxNum; i++) {
    if (i % n === 0) {
      number.push(i);
      console.log(i);
    }
  }
  return number;
};

const askUserInfo = () => {
  const userNumber = Number(prompt("text"));

  return { userNumber };
};

const loop = () => {
  const { userNumber } = askUserInfo();

  if (Number.isInteger(userNumber)) {
    const numbers = multiplesnumber(5, userNumber);
    if (numbers.length === 0) {
      console.log(`sorry no numbers`);
    }
  } else {
    loop();
  }
};
loop();
