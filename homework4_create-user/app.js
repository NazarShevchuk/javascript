function createNewUser(
  firstName = prompt("name", ""),
  secondName = prompt("second name", "")
) {
  this.firstName = firstName;
  this.secondName = secondName;
  this.getLogin = function () {
    let result =
      this.firstName.charAt(0).toLowerCase() + this.secondName.toLowerCase();
    return result;
  };
}
let newUser = new createNewUser();
console.log(newUser.getLogin());
alert(newUser.getLogin());
