// Assignment code here

function getUpperCaseOption() {
  var upperCaseOption = confirm(
    "Would you like to include upper case characters in your password?"
  );
  return upperCaseOption;
}

function addUpperCase() {
  if (upperCaseOption) {
    allowableCharacters += uppercaseCharacters;
    return allowableCharacters;
  }
}

function getNumbersOption() {
  var numbersOption = confirm(
    "Would you like to include numerals in your password?"
  );
  return numbersOption;
}

function addNumbers() {
  if (numbersOption) {
    allowableCharacters += numbers;
    return allowableCharacters;
  }
}

function getSpecialCharactersOption() {
  var specialCharactersOption = confirm(
    "Would you like to include special characters in your password?"
  );
  return specialCharactersOption;
}

function addSpecialCharacters() {
  if (specialCharactersOption) {
    allowableCharacters += specialCharacters;
    return allowableCharacters;
  }
}

function getPasswordLength() {
  var passwordLength = prompt(
    "How many characters would you like your password to be?"
  );
  while (8 > passwordLength || passwordLength > 128) {
    alert("Your password must be between 8 and 128 characters");
    passwordLength = prompt(
      "How many characters would you like your password to be?"
    );
  }
  return passwordLength;
}

// function generatePassword() {
//   var password = "";
//   while (length < passwordLength) {
//     var password += allowableCharacters(Math.floor(Math.random() * passwordLength));
//     return password;
//   }
// }

function getRandomCharacter(string) {
  var randomIndex = Math.floor(Math.random() * allowableCharacters.length);
  return allowableCharacters[randomIndex];
}

function generatePassword(passwordLength) {
  var output = "";
  for (var i = 0; i < passwordLength; i++) {
    output += getRandomCharacter(allowableCharacters);
  }
  return output;
}

var allowableCharacters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "~!@#$%^&*()_+[{]};:,<.>/?";
var passwordLength;
var upperCaseOption;
var numbersOption;
var password;
var upperCaseOption;
var addUpperCase;
var numbersOption;
var addNumbers;
var specialCharactersOption;
var addSpecialCharacters;
var passwordLength;
var password;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  allowableCharacters = "abcdefghijklmnopqrstuvwxyz";
  passwordLength = "";
  upperCaseOption = "";
  numbersOption = "";
  password = "";
  upperCaseOption = getUpperCaseOption();
  allowableCharacters = addUpperCase();
  numbersOption = getNumbersOption();
  allowableCharacters = addNumbers();
  specialCharactersOption = getSpecialCharactersOption();
  allowableCharacters = addSpecialCharacters();
  passwordLength = getPasswordLength();
  password = generatePassword(passwordLength);

  // console.log(upperCaseOption);
  // console.log(allowableCharacters);
  // console.log(numbersOption);
  // console.log(allowableCharacters);
  // console.log(specialCharactersOption);
  // console.log(allowableCharacters);
  // console.log(getPasswordLength);
  // console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
