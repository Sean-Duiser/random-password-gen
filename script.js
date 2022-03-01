// Assignment Code

var letters = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~\"\\";
var genPassword = "";
var generateBtn = document.querySelector("#generate");

// user enters how many characters they'd like their PW to be
function generatePassword() {
  var count = Number(prompt("Please enter the amount of characters you would like in your password."));
  if (count < 8 || count > 128) {
    alert('Please select a number between 8 and 128.');
    return "";
  }

  // user is able to confirm whether or not they'd like lower-case letters in their PW
  var addLower = Boolean(confirm("Would you like your password to contain lower-case letters?"));

  // user is able to confirm whether or not they'd like upper-case letters in their PW
  var addUpper = Boolean(confirm("Would you like your password to contain upper-case letters?"));

  // user is able to confirm whether or not they'd like numbers in their PW
  var addNumeric = Boolean(confirm("Would you like your password to contain numbers?"));

  // user is able to confirm whether or not they'd like special characters in their PW
  var addSpecialChar = Boolean(confirm("Would you like your password to contain special characters?"));

  var possibleChars = ''
  var newPass = ''

  if (addLower) {
    possibleChars += letters;
    newPass += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  if (addUpper) {
    possibleChars += uppercase;
    newPass += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
  }
  if (addNumeric) {
    possibleChars += numbers;
    newPass += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }
  if (addSpecialChar) {
    possibleChars += special;
    newPass += special.charAt(Math.floor(Math.random() * special.length));
  }

  while (newPass.length < count) {
    newPass += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
  }
  return newPass;
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);