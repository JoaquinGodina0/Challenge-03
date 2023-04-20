//created variables in order to include them into the generatePassword function
var passwordLength;
var specialsIncluded;
var upperCaseIncluded;
var lowerCaseIncluded;
var numbersIncluded;
var passwordGenerated;
var password;

//arrays to keep all the necessary characters need in order to generate password and empty array to combine the arrays
specialCharacter = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
arrayCombined = []

//function in order to make the letters array into uppercase
var uppercaseLetters = function(x){
    return x.toUpperCase();
};

var upperCaseLetters = letters.map(uppercaseLetters);

function generatePassword(){
    passwordLength = prompt("How many characters will your password have between 8 and 128?");

    //checks whether or not the user enters an appropriate number
    if(passwordLength < 8 || passwordLength > 128){
        passwordLength = alert("Needs to be a number between 8 through 128.");
        return;
    }// after checking if number is between 8-128 gives confirm boxes to check what options they want in their password
    else if(passwordLength <= 8 || passwordLength <= 128 ){
        numbersIncluded = confirm("Would you like any numbers in your password?");
        upperCaseIncluded = confirm("Would you like any uppercase letters in your password?");
        lowerCaseIncluded = confirm("Would you like any lowercase letters in your password?");
        specialsIncluded = confirm("Would you like any special characters in your password?");
    }//checks to see if the user inputs something other than a number
    else{
        alert("Not a number.");
        return;
    }
    //if statement alerting them that they haven't chosen any character to be included and else if statements checking what was chosen
    if(!numbersIncluded && !upperCaseIncluded && !lowerCaseIncluded && !specialsIncluded){
        alert("You have not chosen any charcters to be included in your password.");
    }
    else if(numbersIncluded && upperCaseIncluded && lowerCaseIncluded && specialsIncluded){
        optionsIncluded = arrayCombined.concat(numbers, upperCaseLetters, letters, specialCharacter);
    }
    else if(numbersIncluded && upperCaseIncluded && lowerCaseIncluded){
        optionsIncluded = arrayCombined.concat(numbers, upperCaseLetters, letters);
    }
    else if(numbersIncluded && specialsIncluded && lowerCaseIncluded){
        optionsIncluded = arrayCombined.concat(numbers, specialsIncluded, letters);
    }
    else if(numbersIncluded && upperCaseIncluded && lowerCaseIncluded){
        optionsIncluded = arrayCombined.concat(numbers, upperCaseLetters, specialsIncluded);
    }
    else if(numbersIncluded && upperCaseIncluded){
        optionsIncluded = arrayCombined.concat(numbers, upperCaseLetters);
    }
    else if(numbersIncluded && specialsIncluded){
        optionsIncluded = arrayCombined.concat(numbers, specialCharacter);
    }
    else if(numbersIncluded && lowerCaseIncluded){
        optionsIncluded = arrayCombined.concat(numbers, letters);
    }
    else if(upperCaseIncluded && lowerCaseIncluded && specialsIncluded){
        optionsIncluded = arrayCombined.concat(upperCaseLetters, letters, specialCharacter);
    }
    else if(upperCaseIncluded && lowerCaseIncluded){
        optionsIncluded = arrayCombined.concat(upperCaseLetters, letters);
    }
    else if(upperCaseIncluded && specialsIncluded){
        optionsIncluded = arrayCombined.concat(upperCaseLetters, specialCharacter);
    }
    else if(lowerCaseIncluded && specialsIncluded ){
        optionsIncluded = arrayCombined.concat(upperCaseLetters, letters);
    }
    else if(lowerCaseIncluded){
        optionsIncluded = letters;
    }
    else if(numbersIncluded){
        optionsIncluded = numbers;
    }
    else if(upperCaseIncluded){
        optionsIncluded = upperCaseLetters;
    }
    else if(specialsIncluded){
        optionsIncluded = specialCharacter;
    };
    
    let generatedPassword = ' ';
    for (var i = 0; i < passwordLength; i++){
    generatedPassword += optionsIncluded[Math.floor(Math.random()*optionsIncluded.length)];
    }
    password = generatedPassword;
    return password;
}
    

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
