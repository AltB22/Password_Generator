var generateBtn = document.querySelector("#generate");

// My Variables
var numbers= ["0123456789"]
var lowerChar= ["abcdefghijklmnopqrstuvwxyz"];
var upperChar = ["ABCDEFGHIJKLMNOPQRSTUVWYZ"];
var specialChar = ["!@#$%^&*()"];
var password = [""]; // Password output
//var charCount = []; // Number of characters selected by user


function writePassword() {
  var password = generatePassword() // Returns string value that is the password
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
// Write password to the #password input
var charCount = [];
charCount = prompt("Enter number of password characters btw 8-128");{}

  if(charCount < 8 || charCount > 128)
    alert("Invalid # of characters, please try again");
    password
}
function generatePassword(){
 
      var includeNumber = confirm("Include Numbers?");
      var includeUpper = confirm("Include Uppercase?");
      var includeLower = confirm("Include Lowercase?");
      var includeSpecial = confirm("Include Special Characters");

      var include = []

      if (includeNumber == true); {
        include.push(numbers);
      }


      includeNumber = numbers
      includeUpper = upperChar
      includeLower = lowerChar
      includeSpecial = specialChar



}



  generateBtn.addEventListener("click", writePassword);


    


  
  

// Add event listener to generate button






//if(sign = true){
  //sign2 = window.prompt("Include Lowercase?"
  //};
  //sign3 = window.prompt("Include Uppercase?");
 // sign4 = window.prompt("Include Special Characters?");
//