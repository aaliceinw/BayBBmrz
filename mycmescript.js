//alert("Welcome to Javascript class");

// Javascript variable
var data1;
var data2,data3,data4;

// store name or number
var firstname = "Joan"; // String => ""
var lastname = "Laine"
var number = 100; // Number

//method 1
var n1 = "Cat";

//method 2
var n2;
n2 = "Kitty";

//method 3
n3 = 12;

//-------------------------

// display output
document.write("Hi Students ! ");
document.write("My Name !  "+firstname);
document.write("My surname !  "+lastname);
document.writeln("");
document.writeln("hello");//new line
document.writeln("bye");

/* Javascript operator */
 
var result;
var num1 , num2;

// 1. Arithmatic
result = 10 + 2;
//or
num1 = 10;//number
num2 = 2;//number
result = num1 + num2;
document.writeln("Addition is "+result);
document.writeln(num1+"+"+num2+"="+result);

num1 = "10";//String
num2 = "2";//String

result = num1 + num2;
document.writeln("Addition is "+result);
document.writeln(num1+"+"+num2+"="+result);

num1 = 3;
num2 = 4;

document.writeln("Difference :"+(num1 - num2));
document.writeln("Multiplication :"+(num1 * num2));

num1 = 10;
num2 = 2;
// num1 / num2 = 5 (reminder = 0)
document.writeln("Division :"+(num1 / num2));//5
document.writeln("Reminder :"+(num1 % num2));//0


//2. Arithmatic assignment
result = 5;
//result = result + num1;//5+10--> result
result += num1 ; 
document.writeln("Result = "+result);

//3. Comparision : true(Yes) | false(No) => Boolean
// Q. Is 10 bigger than 2?-> Yes
result = 10 > 2; 
document.writeln("10 > 2 = "+result);
result = 10 < 2; 
document.writeln("10 < 2 = "+result);

var s1 = "abc";
//var s2 = "xyz";
var s2 = "abc";
result = s1 == s2;
// = Assignment
// == equality
document.writeln("Check String equality = "+result);


//4. Logical (stmt1 op stmt2)=> boolean
/* 
AND-> &&  
stmt1   stmt2   &&
T       T       T
T       F       F
F       T       F
F       F       F

OR-> ||
stmt1   stmt2   ||
T       T       T
T       F       T
F       T       T
F       F       F

*/
// Q. check given nunber is divisible by 5 and 3? (input = 12)
// answer: if reminder of "12/5" is equal to "0"
var input = 12;
result = input % 5;// 12 % 5 = 2
result1 = input % 3;//12 % 3 = 0
document.writeln("reminder ="+result);
document.writeln("reminder1 ="+result1);

var stmt1 = result == 0;//boolean (true | false)
var stmt2 = result1 == 0;//boolean (true | false)
document.writeln("stmt1 ="+stmt1);//false
document.writeln("stmt2 ="+stmt2);//true

// 5 and 3
var check = (input % 5 == 0) && (input % 3 == 0);
document.writeln("12 is divide by 5 and 3 = "+check);

// 5 or 3
var check = (input % 5 == 0) || (input % 3 == 0);
document.writeln("12 is divide by 5 or 3 = "+check);

// Q. check whether user is valid or not => login
/*
username = "admin" 
password = "admin"
*/

var username = "admin";
var password = "admin";

var input1 = "v";//user input
var input2 = "v123";//user input

check = (input1==username) && (input2==password);
document.writeln("Is user valid :"+check);

// logical not !
result  = 10 < 2;//false
document.writeln("10 is greater than 2 = "+result);
check = !result; // !false => true
document.writeln("after negation :"+check);

//display output my username is admin AND my password is admin
document.writeln("My Username is :"+username);
document.writeln("My Passwword is :"+password);
document.writeln("Is User Valid? :"+check);

//display output input1 is v AND input2 is v123
document.writeln("My Username is:"+input1);
document.writeln("My Password is:"+input2);
document.writeln("Is User Valid?: "+check);

//display output username is admin OR input1 is v
document.writeln("My Username is :"+username);
document.writeln("My Usermame is :"+input1);
document.writeln("Is User Valid? :"+check);

//display output password is admin or input2 is v123
document.writeln("My Password is :"+input2);
document.writeln("My Password is :"+password);
document.writeln("Is User Valid?: "+check);

//display output username is admin AND password is input2
document.writeln("My Username is :"+username);
document.writeln("My Password is :"+input2);
document.writeln("Is User Valid?: "+password==password);

//display output username is input2 or password is username
document.writeln("My Username is :"+input2);
document.writeln("My Username is :"+username);
document.writeln("Is User Valid?: "+username==username);
