// Assignment Code
//create arrays for characters password will contain
var generateBtn = document.querySelector("#generate");
var lowercaseCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','Z','W','X','Y','Z'];
var numericalCharacters = ['0','2','3','4','5','6','7','8','9'];
var specialCharacters = ['!','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@']


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Taking the inputs from user. Take potential characters pushing characters into array. Then write a function that randomizes things.
function generatePassword() {
  var options = passwordOptions();
  var result = [];
  var possibleCharacters = [];
  var mustHaveCharacters = [];

  if(options.lowerCaseLetter) {
    possibleCharacters = possibleCharacters.concat(lowercaseCharacters)
    mustHaveCharacters.push(getRandomNumber(lowercaseCharacters))
  }
  if(options.upperCaseLetter) {
    possibleCharacters = possibleCharacters.concat(uppercaseCharacters)
    mustHaveCharacters.push(getRandomNumber(uppercaseCharacters))
  }
  if(options.numberCharacter) {
    possibleCharacters = possibleCharacters.concat(numericalCharacters)
    mustHaveCharacters.push(getRandomNumber(numericalCharacters))
  }
  if(options.specialSymbols) {
    possibleCharacters = possibleCharacters.concat(specialCharacters)
    mustHaveCharacters.push(getRandomNumber(specialCharacters))
  }
  for (var i = 0; i < options.length; i++){
    var possibleCharacter = getRandomNumber(possibleCharacters)

    result.push(possibleCharacter)
  }
  console.log(result)
  return result.join('')
}



function getRandomNumber(characterArray) {
  var generatedIndex = Math.floor(Math.random()*characterArray.length)
  var randomCharacter = characterArray[generatedIndex]
  return randomCharacter
}

function passwordOptions() {
  var length = parseInt(prompt('How many characters?'));
  if(isNaN (length)) {
  alert("Password length must be a number")
  }
  if((numericalCharacters < 8) || (numericalCharacters > 128)){
    alert("Password must be between 8 and 128 characters");
  }
  //prompt user for inputs to create password
  var lowerCaseLetter = confirm('Would you like lowercase letters?')
  var upperCaseLetter = confirm('Would you like uppercase letters?')
  var numberCharacter = confirm('Would you like numbers?')
  var specialSymbols = confirm('Would you like symbols?')

  if(lowerCaseLetter === false && upperCaseLetter === false && numberCharacter === false && specialSymbols === false) {
    alert("Must include one character type")
  }

//collect all inputs and put them in object and then return that object.
  var passwordSelections = {
    lowerCaseLetter : lowerCaseLetter,
    upperCaseLetter : upperCaseLetter,
    numberCharacter : numberCharacter,
    specialSymbols : specialSymbols,
    length : length
}

//take object created through function to return passwordSelections.
return passwordSelections
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
