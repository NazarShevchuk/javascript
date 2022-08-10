const askUserInfo = ({ age, name } = {}) => {
  const userName = name || prompt("Name");
  const userAge = age || Number(prompt("Age"));

  return { name: userName, age: userAge };
};

const loop = (user) => {
  const { age, name } = askUserInfo(user);

  if (age && name) {
    if (age < 18) {
      alert("You are not allowed to visit this website");
    } else if (age >= 18 && age <= 22) {
      const isContinue = confirm("Are you sure you want to continue?");
      if (isContinue) {
        alert(`Welcome ${name}`);
      } else {
        alert("You are not allowed to visit this website");
      }
    } else {
      alert(`Welcome ${name}`);
    }
  } else {
    loop({ name, age });
  }
};
loop();
