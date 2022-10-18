// Assignment Code
var generateBtn = document.querySelector("#generate");

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// !THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// !THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// !THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// !THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// !THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// !THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// !THEN the password is either displayed in an alert or written to the page 

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1-rand) + rand*max)
 }

 function getRandomItem(list) {
   return list[randomInt(list.length)]
 }

 function generatePassword () {
  var userInput = window.prompt("How many digits do you want your password to be?")
 
 var passwordLength = parseInt(userInput)
 if (isNaN(passwordLength)) {
   window.alert("Please enter a valid number!")
   return
 }

 if (passwordLength < 8 || passwordLength > 128) {
   window.alert("Password length should be between 8 and 128 characters!")
  return
}
var userWantsNumbers = window.confirm("Would you like to add numbers to your password?")
var userWantsSymbols = window.confirm("Would you like to add symbols to your password?")
var userWantsLowercase = window.confirm("Would you like to add lowercase letters to your password?")
var userWantsUppercase = window.confirm("Would you like to add uppercase letters to your password?")

var numberList =["0","1","2","3","4","5","6","7","8","9"]
var symbolList =["!","@","#","$","%","^","&","*","(",")","_","-","=","+"]
var lowercaseList =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var uppercaseList =["A", "B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

var optionsCart =[]

if (userWantsNumbers === true) {
  optionsCart.push(numberList)
}
if (userWantsSymbols === true) {
  optionsCart.push(symbolList)
}
if (userWantsLowercase === true) {
  optionsCart.push(lowercaseList)
}
if (userWantsUppercase === true) {
  optionsCart.push(uppercaseList)
}
if (optionsCart.length === 0) {
  optionsCart.push(uppercaseList)
}
//! If no prompt is selected, default will make all the characters numerical and upper-case.
var generatePassword = ""

for (var i = 0; i < passwordLength; i++) {
  var randomList = getRandomItem(optionsCart)
  var randomChar = getRandomItem(randomList)
  generatePassword += randomChar
}
return generatePassword

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
