// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var fname = document.registrationForm.fname.value;
    var lname = document.registrationForm.lname.value;
    var mobile = document.registrationForm.mobile;
    var email = document.registrationForm.email
    var pw1= document.registrationForm.pw1.value;
    var country = document.registrationForm.country.value;
    var gender= document.registrationForm.gender.value;
    var courses = [];
    var checkboxes = document.getElementsByName("Courses]");
    for(var i=0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked) {
            // Populate Courses array with selected values
           courses.push(checkboxes[i].value);
        }
    }

    //defining error varirables with a default value
    var fnameErr = lnameErr = mobileErr = emailErr = pw1Err = countryErr = genderErr = true;
 
    // Validate first name
 if(fname == "") {
    printError("nameErr", "Please enter your first name");
} else {
    var regex = /^[a-zA-Z\s]+$/;                
    if(regex.test(fname) === false) {
        printError("fnameErr", "Please enter a first name");
    } else {
        printError("fnameErr", "");
        fnameErr = false;
    }
}
    // Validate last name
    if(lname == "") {
        printError("lnameErr", "Please enter your last name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(lname) === false) {
            printError("lnameErr", "Please enter a last name");
        } else {
            printError("lnameErr", "");
            lnameErr = false;
        }
    }
    
      // Validate mobile number
      if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }

      // Validate email address
      if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
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
    var regex = /^\S+@\S+\.\S+$/;
    if(regex.test(pw1) === false) {
        printError("pw1Err", "Passsword must 8 characters minimum ");
    } else{
        printError("pw1Err", "");
        pw1Err = false;
    }
}

    // Validate country
   if(country == "Select") {
    printError("countryErr", "Please select your country");
} else {
    printError("countryErr", "");
    countryErr = false;
}

    // Validate gender
    if(gender1 == "") {
        printError("gender1Err", "Please select your gender");
    } else {
        printError("gender1Err", "");
        gender1Err = false;
    }

   // Prevent the form from being submitted if there are any errors
   if((fnameErr || lnameErr || mobileErr || emailErr || pw1Err || countryErr || genderErr) == true) {
    return false;
 } else {
     // Creating a string from input data for preview
     var dataPreview = "You've entered the following details: \n" +
                       "First Name: " + fname + "\n" +
                       "Last Name: " + lname + "\n" +
                       "Mobile Number: " + mobile + "\n" +
                       "Email Address:  "+ email; + "\n" +
                       "Password " + pw1 + "\n" +
                       "Country: " + country + "\n" +
                       "Gender: " + gender + "\n";
     if(courses.length) {
         dataPreview += "Courses: " + courses.join(", ");
     }
     // Display input data in a dialog box before submitting the form
     alert(dataPreview);
 }

};
