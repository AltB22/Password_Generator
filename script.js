// Assignment Code
var generateBtn = document.querySelector("#generate");

// My Variables
var numbers= ["0123456789"]
var lowerChar= ["abcdefghijklmnopqrstuvwxyz"];
var upperChar = ["ABCDEFGHIJKLMNOPQRSTUVWYZ"];
var specialChar = ["!@#$%^&*()"];
var password = ""; // Password output
var charCount = ""; // Number of characters selected by user




function generatePassword(){
  let countPrompt = prompt("Enter number of password characters btw 8-128")
  var charCount = (countPrompt);
    if(countPrompt < 8 || countPrompt > 128 || countPrompt());{
      confirm("Invalid # of characters, try again");

   
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //Returns string value that is the pass..
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//if(sign = true){
  //sign2 = window.prompt("Include Lowercase?"
  //};
  //sign3 = window.prompt("Include Uppercase?");
 // sign4 = window.prompt("Include Special Characters?");
//}