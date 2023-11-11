// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var allchars = "1234567890abcdefghijklmnopqrstuvwxyz!#$%&'()*+,-./:;<=>?@[]/^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "1234567890";
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var symbols = "!#$%&'()*+,-.:;<=>?@[]/^_`{|}~";

console.log(allchars);
console.log(num);
console.log(lower);
console.log(upper);
console.log(symbols);

function generatePassword(){
  var allchars = "1234567890abcdefghijklmnopqrstuvwxyz!#$%&'()*+,-./:;<=>?@[]/^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var num = "1234567890";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var symbols = "!#$%&'()*+,-.:;<=>?@[]/^_`{|}~";
  //var passwordLength = prompt ("How many characters would you like your password?");
  var password = "";
  var optionSelect = [];
  var valid = false;

  while (valid == false) {
    var passwordLength = window.prompt ("How many characters would you like your password?");
    if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Please pick a password inbetween 8 & 128 characters!");
    } else {
      valid = true;
      var numQuestion = window.confirm("Should your password contain numbers?");
      var lowerQuestion = window.confirm("Should your password contain lowercase letters?");
      var upperQuestion = window.confirm("Should your password contain uppercase letters?");
      var symbolsQuestion = window.confirm("Should your password contain symbols?");
    }
    if (numQuestion === false && lowerQuestion === false && upperQuestion === false && symbolsQuestion === false) {
      return "Invalid Password";
    } 
    
    if (numQuestion) {
      optionSelect += num; 
    }

    if (lowerQuestion) {
        optionSelect += lower; 
      }
    
    if (upperQuestion) {
        optionSelect += upper; 
      }
    
    if (symbolsQuestion) {
        optionSelect += symbols; 
      }


  for (var i = 0; i < passwordLength; i++){
    var random = Math.floor(Math.random() * optionSelect.length);
    password += optionSelect.substring(random, random +1);3
  }
}

  return password;


}


