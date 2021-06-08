// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var firstname = document.loginForm.firstname.value;
    var lastname = document.loginForm.lastname.value;
    var pw1= document.loginForm.pw1.value;
    var pw2= document.loginForm.pw2.value
    var certificate = document.loginForm.certificate.value;
    var country = document.loginForm.country.value;
    var male = document.loginForm.gender1.value;
    var female = document.loginForm.gender2.value;
    var courses = [];
    var checkboxes = document.getElementsByName("Course]");
    for(var i=0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked) {
            // Populate hobbies array with selected values
            courses.push(checkboxes[i].value);
