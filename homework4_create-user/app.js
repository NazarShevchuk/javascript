function createNewUser(
  firstName = prompt("name", ""),
  lastName = prompt("last name", "")
) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.getLogin = function () {
    let result =
      this.firstName.charAt(0).toLowerCase() + this.lastName.toLowerCase();
    return result;
  };
}
let newUser = new createNewUser();
console.log(newUser.getLogin());
alert(newUser.getLogin());
