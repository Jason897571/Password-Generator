// Assignment code here

const lowercase_character = "abcdefghijklmnopqrstuvwxyz";
const uppercase_character = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numeric_character = "123456789";
const special_character = `"!#$%^&*(),./;\[]<>?:|{}_+~`;


var generatePassword = function () {

  /* check if the index is in an array of several arrays */
  var check_number_in_keys = function (array, number) {
    for (let i = 0; i < array.length; i++) {
      if (array[i][0] == number) {
        return [true, array[i][1]];
      }
    }
    return [false, null];
  };

  /* get a random character based on string */
  var randomly_pickup_element = function (_string) {
    var random_index = Math.floor(Math.random() * _string.length);
    var random_character = _string[random_index];
    return random_character;
  };


  var length_validation = true;

  /* have a loop if the user keeps select inappropriate length */
  while (length_validation) {
    var password_length = window.prompt(
      "Please input the length of your password"
    );

    /* if the length is less than 8 */
    if (password_length < 8) {
      window.alert(
        "Your password is too short! Please input a number between 8 and 128"
      );
      length_validation = true;
    } else if (password_length > 128) {
    /* if the length is more than 128 */
      window.alert(
        "Your password is too long! Please input a number between 8 and 128"
      );
      length_validation = true;
    } else if (password_length >= 8 && password_length <= 128) {
    /* if the length is between 8 and 128 */
      length_validation = false;
      /* other invalid input */
    } else {
      window.alert(
        "Your input is not valid, Please re-enter your password length"
      );
      length_validation = true;
    }
  }

  var criteria_validation = true;
  while (criteria_validation) {
    /* if the password should include lowercase character */
    var is_lowercase = window.confirm(
      "If your password includes lowercase character?"
    );

    /* if the password should include uppercase character */
    var is_uppercase = window.confirm(
      "If your password includes uppercase character?"
    );

    /* if the password should include numeric character */
    var is_numeric = window.confirm(
      "If your password includes numeric character?"
    );

    /* if the password should include special character */
    var is_special = window.confirm(
      "If your password includes special character?"
    );

    criteria_validation = false;

    /* if there is no character type is selected, select again */
    if (!is_lowercase && !is_uppercase && !is_numeric && !is_special) {
      window.alert(
        "You need to include at least one character type for your password. Please input 'enter' to continue. "
      );
      criteria_validation = true;
    }
  }


  /* need to pick up a letter for non-criteria password slot from combined character array */
  var combined_character_array = "";
  if (is_lowercase) {
    combined_character_array =
      combined_character_array.concat(lowercase_character);
  }
  if (is_uppercase) {
    combined_character_array =
      combined_character_array.concat(uppercase_character);
  }
  if (is_numeric) {
    combined_character_array =
      combined_character_array.concat(numeric_character);
  }
  if (is_special) {
    combined_character_array =
      combined_character_array.concat(special_character);
  }

  console.log(combined_character_array);

  /* create a password holder and determine which slot is for criteria letter */
  var password_holder = "";
  var criteria_info_array = [];
  var index_taken_array = [];

  /* if lowercase is included, determine the slot as lowercase and generate a random character  */
  if (is_lowercase) {
    var lowercase_index = Math.floor(Math.random() * password_length);
    while (index_taken_array.includes(lowercase_index)) {
      var lowercase_index = Math.floor(Math.random() * password_length);
    }

    var lowercase_letter = randomly_pickup_element(lowercase_character);

    index_taken_array.push(
      lowercase_index
    ); /* the index position lowercase has taken */

    var lowercase_info = [lowercase_index, lowercase_letter];

    criteria_info_array.push(lowercase_info);
  }
  /* if uppercase is included, determine the slot as uppercase and generate a random character  */
  if (is_uppercase) {
    var uppercase_index = Math.floor(Math.random() * password_length);

    while (index_taken_array.includes(uppercase_index)) {
      var uppercase_index = Math.floor(Math.random() * password_length);
    }

    var uppercase_letter = randomly_pickup_element(uppercase_character);

    index_taken_array.push(
      uppercase_index
    ); /* the index position lowercase has taken */

    var uppercase_info = [uppercase_index, uppercase_letter];

    criteria_info_array.push(uppercase_info);
  }
  /* if numeric is included, determine the slot as numeric and generate a random character  */
  if (is_numeric) {
    var numeric_index = Math.floor(Math.random() * password_length);

    while (index_taken_array.includes(numeric_index)) {
      var numeric_index = Math.floor(Math.random() * password_length);
    }

    var numeric_letter = randomly_pickup_element(numeric_character);

    index_taken_array.push(
      numeric_index
    ); /* the index position lowercase has taken */

    var numeric_info = [numeric_index, numeric_letter];

    criteria_info_array.push(numeric_info);
  }
  /* if special is included, determine the slot as special and generate a random character  */
  if (is_special) {
    var special_index = Math.floor(Math.random() * password_length);

    while (index_taken_array.includes(special_index)) {
      var special_index = Math.floor(Math.random() * password_length);
    }

    var special_letter = randomly_pickup_element(special_character);
    index_taken_array.push(
      special_index
    ); /* the index position lowercase has taken */

    var special_info = [special_index, special_letter];

    criteria_info_array.push(special_info);
  }

  console.log(
    "below is the order regarding if a slot is with criteria or not"
  );
  
  for (var i = 0; i < password_length; i++) {
    var is_criteria_slot = check_number_in_keys(criteria_info_array, i)[0];/* if the slot is criteria slot */
    var criteria_character = check_number_in_keys(criteria_info_array, i)[1]; /* the value for slot */

    console.log(is_criteria_slot);

    if (is_criteria_slot) {
      password_holder += criteria_character;
    } else {
      password_holder += randomly_pickup_element(combined_character_array);
    }
  }



  return (
    "The length is: " +
    password_length +
    "\n" +
    "\n" +
    "The password is: " +
    password_holder
  );
};

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
