// Assignment Code

var letters = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"
var special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~\"\\"
var genPassword = "";
var generateBtn = document.querySelector("#generate");

// user enters how many characters they'd like their PW to be
function generatePassword() {
  var count = Number(prompt("Please enter the amount of characters you would like in your password."));
  if (count < 8 || count > 128) {
    console.log("Out of range");
    alert('Please select a number between 8 and 128.');
    return "";
  }

  // user will be given a password of only random lower-case letters if nothing else is selected
  for (var i = 0; i < count; i++) {
    var random = Math.floor(Math.random() * letters.length);
    genPassword += letters[random];
  }

// user is able to confirm whether or not they'd like upper-case letters in their PW
  var upper = Boolean(confirm("Would you like your password to contain upper-case letters?"));
  if (upper) {
    for (var i = 0; i < count; i++) {
      var random = Math.floor(Math.random() * uppercase.length);
      genPassword += uppercase[random];
    }
  }

  // user is able to confirm whether or not they'd like numbers in their PW
  var numeric = Boolean(confirm("Would you like your password to contain numbers?"));
  if (numeric) {
    for (var i = 0; i < count; i++) {
      var random = Math.floor(Math.random() * numbers.length);
      genPassword += numbers[random];
    }

  // user is able to confirm whether or not they'd like special characters in their PW
  var specialChar = Boolean(confirm("Would you like your password to contain special characters?"));
  if (specialChar) {
    for (var i = 0; i < count; i++) {
      var random = Math.floor(Math.random() * special.length);
      genPassword += special[random];
    }
  }

  console.log(genPassword);

  return genPassword;
}
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);