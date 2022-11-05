// Assignment code here
var confirmLength;
var confirmUpper;
var confirmLower;
var confirmNumber;
var confirmSpecial;
var userChoices;

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var caseUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var caseLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChar = ["!", "", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",","-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[",];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Start Function
function generatePassword() {
  // Ask four user Input
  confirmLength = prompt("How long would you like the password to be? Choose between 8 and 128");
  console.log("Password length " + confirmLength);
  
  if(!confirmLength) {
    alert("Required value");

  } else if (confirmLength < 8 || confirmLength > 128) {
    confirmLength = prompt("You must choose between 8 and 128");
    console.log("Password length " + confirmLength);
  
  } else { 
    confirmUpper = confirm("Will this contain Upper case letters?");
    console.log("Upper case " + confirmUpper);
    confirmLower = confirm("Will this contain Lower case letters?");
    console.log("Lower case " + confirmLower);
    confirmNumber = confirm("Will this contain numbers?");
    console.log("Number " + confirmNumber);
    confirmSpecial = confirm("Will this contain special characters?");
    console.log("Special Character " + confirmSpecial);

  };

  // No answer then
  if (!confirmUpper && !confirmLower && !confirmNumber && !confirmSpecial) {
    userChoices = alert("Must have chosen a criteria");
  // If there are 4 true options
  } else if (confirmUpper && confirmLower && confirmNumber && confirmSpecial) {
    userChoices = caseLower.concat(caseLower, number, specialChar);
    console.log(userChoices);
  }
  // If there are 3 true options
  else if (confirmUpper && confirmLower && confirmNumber) {
    userChoices = caseUpper.concat(lowerCase, number);
    console.log(userChoices);
  }
  else if (confirmUpper && confirmUpper && confirmSpecial) {
    userChoices = caseUpper.concat(lowerCase, specialChar);
    console.log(userChoices);
  }
  else if (confirmUpper && confirmNumber && confirmSpecial) {
    userChoices = caseUpper.concat(number, specialChar);
    console.log(userChoices);
  }
  else if (confirmLower && confirmNumber && confirmSpecial) {
    userChoices = caseLower.concat(number, specialChar);
    console.log(userChoices);
  }
  // If there are 2 true options
  else if (confirmUpper && confirmLower) {
    userChoices = caseLower.concat(upperCase);
    console.log(userChoices);
  }
  else if (confirmUpper && confirmNumber) {
    userChoices = caseUpper.concat(number);
    console.log(userChoices);
  }
  else if (confirmUpper && confirmSpecial) {
    userChoices = caseUpper.concat(specialChar);
    console.log(userChoices);
  }
  else if (confirmLower && confirmNumber) {
    userChoices = caseLower.concat(number);
    console.log(userChoices);
  }
  else if (confirmLower && confirmSpecial) {
    userChoices = caseLower.concat(specialChar);
    console.log(userChoices);
  }
  else if (confirmNumber && confirmSpecial) {
    userChoices = number.concat(specialChar);
    console.log(userChoices);
  }
  // If there is only 1 true option
  else if (confirmUpper) {
    userChoices = blackUpper.concat(caseUpper);
    console.log(userChoices);
  }
  else if (confirmLower) {
    userChoices = caseLower;
    console.log(userChoices);
  }
  else if (confirmNumber) {
    userChoices = numbers;
    console.log(userChoices);
  }
  else if (confirmSpecial) {
    userChoices = specialChar;
    console.log(userChoices);
  };

  // Empty variable 
  var confirmEmpty = [];
  
  // Loop for random selection
  for (var i = 0; i < confirmLength; i++) {
    var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
    confirmEmpty.push(allChoices);
    console.log(allChoices);
  }

  // Join/return password 
  var password = confirmEmpty.join("");
  console.log("Your Pasword is: " + password);
  return password;
}