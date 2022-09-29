// Assignment Code
var generateBtn = document.querySelector("#generate");

// My Variables
var numbers= ["0123456789"]
var lowerChar= ["abcdefghijklmnopqrstuvwxyz"];
var upperChar = ["ABCDEFGHIJKLMNOPQRSTUVWYZ"];
var specialChar = ["!@#$%^&*()"];
var password = ""; // Password output
var charCount = ""; // Number of characters selected by user
var wantNumbers = confirm("Include Numbers?");
var wantUpper = confirm("Include Uppercase?");
var wantLower = confirm("Include Lowercase?");
var wantSpecial = confirm("Include Special Characters");



function generatePassword(){
  let countPrompt = prompt("Enter number of password characters btw 8-128");
  var charCount = (countPrompt);
    if(charCount < 8 || charCount > 128); {
      confirm("Invalid # of characters, please try again");
      return "";
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