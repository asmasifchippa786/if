document.write("<h1>IF...ELSE & ELSE IF STATEMENTS,TESTING SET OF CONDITIONS & SWITCH STATEMENTS</h1><hr>");

var input1 = prompt("Enter Your Age");
if (input1 >= 18){
    alert("Old Enough")
}
else{
    alert("Too Young")
}

var input2 = prompt("Enter Your Name");

if (input2 === "anas"){
    alert("Your Name And My Name")
}

var input3 = +prompt("enter first number")

var input4 = +prompt("enter Second number")

var input5 = prompt("Chose Operator (+ , - , * , / , %)")

var sum = (input3+input4)

var substract = (input3-input4)

var multiplication = (input3*input4)

var division = (input3/input4)

var prdentage = (input3/input4)*100

switch (input5){
    case "+" : alert("The Sum Of " + input3 + " and " + input4 + " is " + sum); break
    case "-" : alert("The Subtraction Of " + input3 + " and " + input4 + " is " + substract); break
    case "*" : alert("The Multiplication Of " + input3 + " and " + input4 + " is " + multiplication); break
    case "/" : alert("The Division Of " + input3 + " and " + input4 + " is " + division); break
    case "%" : alert("The Prcentage Of " + input3 + " and " + input4 + " is " + prdentage); break
    default : alert ("PLease Enter Valaid Operator")
}

var input6 = prompt("Enter Time In 24 Hours Clock Format (1900)")

if(input6>=0000 && input6<1200){
    alert("Good Morning")
}
else if(input6>=1200 && input6<1700){
    alert("Good afternoon")
}
else if(input6>=1700 && input6<2100){
    alert("Good Evning")
}
else if(input6>=2100 && input6<2359){
    alert("Good Night")
}
else{
    alert("Enter Valaid Time")
}

var input7 = +prompt("Enter Any year (Only Contain NUMBER")

if (input7%4 == 0){
    if (input7%100 == 0){
        if (input7%400 ==0){
            alert("Its Leap Year")
        }
        else{
            alert("Its not a leap year")
        }
    }
    else{
        alert("Its Leap Year")
    }   
}
else{
alert("Its not a Leap Year")
}

var pasowrd = 1234;

var input8 = prompt("Enter Your Pasword")

if (input8 == pasowrd){
    alert("Correct! The password you entered matches the original password")
}
else if (input8 != pasowrd){
    alert("Incorrect password")
}
else{
    alert("Enter The Password")
}

var firstName = "Ali";

if (firstName === "Fahad") {
document.write("<h1>Hello Fahad!</h1>");
}
else{
    document.write("<h1>You Are Not Fahad</h1>")
}

var greeting;

var hour = 13;

if (hour < 18) {
greeting = "Good day";
}
else{
greeting = "Good evening";
}

console.log(greeting)

var number1 = 12;

var number2 = 13;

if (number1 == number2){
    console.log("Both are Equal")
}
else if (number1 > number2){
     console.log(number1 + " is Larger than " + number2)  
}
else{
    console.log(number2 + " is larger than " + number1)
}

var input9 = +prompt("Enter Your Curent time (Show In 24 Hours Format (1200))")

if (input9>=600 && input9<=900){
    alert("Breakfast Is Served")
}
else if (input9>=1100 && input9<=1300){
    alert("Time For Lunch")
}
else if (input9>=1700 && input9<=2000){
    alert("Its Dinner")
}
else{
    alert("Sorry, you'll have to wait, or go get a snack")
}

var value1 = 123;

console.log(typeof value1)

var value2 = "Anas";

console.log(typeof value2)

var value3 = true;

console.log(typeof value3)

var value4 ;

console.log(typeof value4)

var input10 = prompt("Write any Letter")

if (input10 == "a" || input10 == "e" || input10 == "i" || input10 == "o" || input10 == "u"){
    alert("Ture ! Its A Vowels")
}
else{
    alert("False ! Its Not A Vowels")
}

var value3 = 10 != 8 ;

console.log(value3);

var month = +prompt("enter any Month Number")

switch(month){
    case 1 : alert("Janvary");break
    case 2 : alert("Febuary");break
    case 3 : alert("March");break
    case 4 : alert("April");break
    case 5 : alert("May");break
    case 6 : alert("June");break
    case 7 : alert("July");break
    case 8 : alert("August");break
    case 9 : alert("september");break
    case 10 : alert("october");break
    case 11: alert("November");break
    case 12 : alert("December");break
    default:alert("Invalid Month")
}

var age = prompt('Enter age')

age > 18 ? alert('You are too young') : alert('You are old enough')

var input8 = prompt ("Enter Positive or Negetive Number")

if (input8 > 0){
    alert("The Number Is Positive")
}
else if (input8 < 0){
    alert("The Number Is Negetive")
}
else if (input8 == 0){
    alert("The Number Is Zero")
}
else{
    alert("Type only Number Please")
}

var oae = prompt("Write Any Number");

if ((oae % 2)=== 0){
    alert("This Number Is Even")
}
else {
    alert("This number is odd")
}
var  multi = prompt("select any number") ;

if (multi/3){
    alert("its correct that  " + multi + " divisible by 3")
}
else{
    alert("no its not corect")
}