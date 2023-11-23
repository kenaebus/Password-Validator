/**
 * Goal: Collect all conditions and authiorize user to sign up.
 * Check each condition and display it on front-end
 */
var passWordConditions = document.getElementById("passWordConditions");
var emailConditions = document.getElementById("emailConditions");
var userNameConditions = document.getElementById("userNameConditions");


var validCondition = document.getElementById("validCondition");

// Hide conditions
passWordConditions.style.display = "none";
emailConditions.style.display = "none";
userNameConditions.style.display = "none";


let isLengthValidated = false;
let hasSpecialCharValidated = false;
let hasUpperCaseValidated = false;
let hasNumberValidated = false;

let isEmailValid = false;


function checkConditions(formInput) {
    if (formInput == 'password') {
        passWordConditions.style.display = "block";
        let passValue = document.getElementById("passwordValue");

        // Check specific conditions
        isLengthValidated = checkCharacters(passValue.value);
        hasSpecialCharValidated = checkSpecialChar(passValue.value);
        hasUpperCaseValidated = checkUpperCase(passValue.value);
        hasNumberValidated = checkNum(passValue.value);
    }
    
    if (formInput == 'email') {
        emailConditions.style.display = "block";
        let emailValue = document.getElementById("emailValue");

        // Check specific conditions
        isEmailValid = checkEmail(emailValue.value);
    } 

    if (formInput == 'username') {
        userNameConditions.style.display = "block";
    }
}

/**
 * Checks for required letters in an input
 * @input - Password Form Value
 * @return Boolean
 */
function checkCharacters(x) {
    if (x.length > 6) {
        document.getElementById("isLong").style.color = "green";
        return true;
    } else {
        document.getElementById("isLong").style.color = "red";
        return false;
    }
}

/**
 * Checks for required special character(s) in an input
 * @input - Password Form Value
 * @return Boolean
 */
function checkSpecialChar(x) {
    var specialChars = /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/; 
    
    if (specialChars.test(x)) {
        document.getElementById("isSpecial").style.color = "green";
        return true;
    } else {
        document.getElementById("isSpecial").style.color = "red";
        return false;
    }
}

/**
 * Checks for required uppercase letter(s) in an input
 * @input - Password Form Value
 * @return Boolean
 */
function checkUpperCase(x) {    
    if (x.match(/[A-Z]/g)) {
        document.getElementById("isUpper").style.color = "green";
        return true;
    } else {
        document.getElementById("isUpper").style.color = "red";
        return false;
    }
}

/**
 * Checks for required number(s) in an input
 * @input - Password Form Value
 * @return Boolean
 */
function checkNum(x) {
    if (x.match(/[0-9]/i)) {
        document.getElementById("isNum").style.color = "green";
        return true;
    } else {
        document.getElementById("isNum").style.color = "red";
        return false;
    }
}

/**
 * Checks for valid email in an input
 * @input - Email Form Value
 * @return Boolean
 */
function checkEmail(x) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (x.match(mailformat)) {
        document.getElementById("isEmail").style.color = "green";
        return true;
    } else {
        document.getElementById("isEmail").style.color = "red";
        return false;
    }
}

/**
 * Check if all conditions are met
 * @input
 * @return - change screen to authorize registration
 */
function authorize() {

    /*
        If ALL CONDITIONS ARE MET, AUTHORIZE USER
    */

    if (isLengthValidated && hasSpecialCharValidated && hasUpperCaseValidated && hasNumberValidated && isEmailValid) {
        alert("SUCCESSFUL REGISTRATION!"+ "\n" + "Valid Length:  " + isLengthValidated + "\n" + "Valid Spec Char:  " + hasSpecialCharValidated + "\n" + "Valid Case:  " + hasUpperCaseValidated + "\n" + "Valid Number(s):  " + hasNumberValidated + "\n" + "Valid Email Address:  " + isEmailValid);
    } else {
        alert("!WARNING! ERROR REGISTRATING "+ "\n" +"Valid Length:  " + isLengthValidated + "\n" + "Valid Spec Char:  " + hasSpecialCharValidated + "\n" + "Valid Case:  " + hasUpperCaseValidated + "\n" + "Valid Number(s):  " + hasNumberValidated + "\n" + "Valid Email Address:  " + isEmailValid);
    }

  
}