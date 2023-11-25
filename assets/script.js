// adapts to multiple screen sizes
//click the button to generate a password
//prompted for password criteria, select which criteria to include in the password
//prompted for the length of the password, a length of at least 8 characters and no more than 128 characters
//asked for character types to include in the password, confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//answer each prompt, my input should be validated and at least one character type should be selected
//all prompts are answered,a password is generated that matches the selected criteria
//the password is generated, password is either displayed in an alert or written to the page

// Assignment code here


var generatePassword = function(){
  var password_length = window.prompt("Please input the length of your password");

  check_length_of_password = function(){
    if(password_length < 8 ){
      window.prompt("Your password is too short! Please input a number between 8 and 128");
    }
    else if(password_length> 128){
      window.prompt("Your password is too long! Please input a number between 8 and 128");
    }
    else if(password_length>=8 && password_length<=128){
      return password_length;
    }else{
      window.prompt("Your input is not valid, Please re-enter your password length");
    }
    return "input is not valid";
  }

  check_character_types = function(){

    invild_prompt = function(character_type){
      return window.prompt(`Your input is not valid. If your password includes ${character_type} character? please input 'y' or 'n'`);
    }

    /* if the password should include lowercase character */
    var lowercase = window.prompt("If your password includes lowercase character? y/n");

    while(lowercase != "y" && lowercase != "n"){
      var lowercase = invild_prompt("lowercase")
    }
    /* if the password should include uppercase character */
    var uppercase = window.prompt("If your password includes uppercase character? y/n");

    while(uppercase != "y" && uppercase != "n"){
      var uppercase = invild_prompt("uppercase")
    }

    /* if the password should include numeric character */
    var numeric = window.prompt("If your password includes numeric character? y/n");

    while(numeric != "y" && numeric != "n"){
      var numeric = invild_prompt("numeric")
    }

    /* if the password should include special character */
    var special = window.prompt("If your password includes special character? y/n");
    while(special != "y" && special != "n"){
      var numeric = invild_prompt("special")
    }


    if(lowercase == "y"){
      var is_lowercase = true;
    }
    else if(lowercase == "n"){
      var is_lowercase = false;
    }

    if(uppercase == "y"){
      var is_uppercase = true;
    }
    else if(uppercase  == "n"){
      var is_uppercase  = false;
    }

    if(numeric == "y"){
      var is_numeric = true;
    }
    else if(numeric  == "n"){
      var is_numeric = false;
    }

    if(special == "y"){
      var is_special = true;
    }
    else if(special  == "n"){
      var is_special = false;
    }

    if(!is_lowercase && !is_uppercase && !is_numeric && !is_special){
      window.prompt("You need to include at least one character type for your password. Please input 'enter' to continue. ");
      check_character_types()
    }
    
    var character_type_dic = {"is_lowercase":is_lowercase,"is_uppercase":is_uppercase,"is_numeric":is_numeric,"is_special":is_special}

    return character_type_dic

  }




  password_length = check_length_of_password()
  type = check_character_types()

  return "the length is: " + password_length + "\n" + "the characte is " + String(type)
  
}



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
