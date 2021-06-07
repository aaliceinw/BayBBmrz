// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var firstname = document.contactForm.firstname.value;
    var lastname = document.contactForm.lastname.value;
    var pw1= document.contactForm.pw1.value;
    var pw2= document.contactForm.pw2.value
    var certificate = document.contactForm.certificate.value;
    var country = document.contactForm.country.value;
    var male = document.contactForm.gender1.value;
    var female = document.contactForm.gender2.value;
    var courses = [];
    var checkboxes = document.getElementsByName("Course]");
    for(var i=0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked) {
            // Populate hobbies array with selected values
            courses.push(checkboxes[i].value);
        }
    }
	// Defining error variables with a default value
    var nameErr = emailErr = pw1Err = countryErr = genderErr = true;
    
    // Validate firstname
    if(firstname == "") {
        printError("firstnameErr", "Please enter your first name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(firstname) === false) {
            printError("firstnameErr", "Please enter a valid first name");
        } else {
            printError("firstnameErr", "");
            firstnameErr = false;
        }
    }
    
    // Validate lastname 
    if(lastname == "") {
        printError("lastnameErr", "Please enter your lastname address");
    } else {
        // Regular expression for basic lastnamevalidation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(lastname) === false) {
            printError("lastnameErr", "Please enter a valid lastname address");
        } else{
            printError("lastname", "");
            lastnameErr = false;
        }
    }
    
    // Validate pw1
    if(pw1 == "") {
        printError("pw1Err", "Please enter your pw1 number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(pw1) === false) {
            printError("pw1Err", "Please enter a valid 10 digit pw1 number");
        } else{
            printError("pw1Err", "");
            pw1Err = false;
        }
    }
    
  // Validate pw2
  if(pw1 == "") {
    printError("pw2Err", "Please comfirm your password");
} else {
    var regex = /^[1-9]\d{9}$/;
    if(regex.test(pw1) === false) {
        printError("pw2Err", "Passwords dom't match");
    } else{
        printError("pw2Err", "");
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
    if(gender == "") {
        printError("genderErr", "Please select your gender");
    } else {
        printError("genderErr", "");
        genderErr = false;
    }
    
    // Prevent the form from being submitted if there are any errors
    if((firstnameErr || lastnameErr || pw1Err || pw2Err || certificateErr || countryErr || genderErr|| coursesErr) == true) {
       return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
                          "First Name: " + firstname + "\n" +
                          "Last Name: " + lastname+ "\n" +
                          "Password: " + pw1 + "\n" +
                          "Confirm Password: " + pw2 + "\n" +
                          "Certificate" + certificate + "\n" +
                          "Country: " + country + "\n" +
                          "Gender: " + gender + "\n" +
        if(courses.length) {
            dataPreview += "Courses: " + courses.join(", ");
        }
        // Display input data in a dialog box before submitting the form
        alert(dataPreview);
    }
};