// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var uname = document.loginForm.uname.value;
    var email = document.loginForm.email
    var pw1= document.loginForm.pw1.value;

    //defining error varirables with a default value
    var fnameErr = emailErr = pw1Err = true;
 
    // Validate user name
 if(uname == "") {
    printError("unameErr", "Please enter your username");
} else {
    var regex = /^[a-zA-Z\s]+$/;                
    if(regex.test(fname) === false) {
        printError("unameErr", "Please enter registered user name");
    } else {
        printError("unameErr", "");
        fnameErr = false;
    }
}
      // Validate email address
      if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a registered email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }

    // Validate password
 if(pw1 == "") {
    printError("pw1Err", "Please enter a password");
} else {
    // Regular expression for basic password validation
    var regex = /^[a-zA-Z\s]+$/;
    if(regex.test(pw1) === false) {
        printError("pw1Err", "Passsword must 8 characters minimum");
    } else{
        printError("pw1Err", "");
        pw1Err = false;
    }
}


   // Prevent the form from being submitted if there are any errors
   if((unameErr || emailErr || pw1Err || mobileErr ) == true) {
    return false;
 } else {
     // Creating a string from input data for preview
     var dataPreview = "You've entered the following details: \n" +
                       "First Name: " + uname + "\n" +
                       "Email Address:  "+ email; + "\n" +
                       "Password " + pw1 + "\n" +
     // Display input data in a dialog box before submitting the form
     alert(dataPreview);
 }

};
