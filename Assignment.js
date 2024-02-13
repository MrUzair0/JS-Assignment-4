1.
var Password = "xyz123";
var userPassword = prompt("Enter your password:");

if (!userPassword) {
    alert("Please enter your password");
} else if (userPassword === Password) {
    alert("Correct! The password you entered matches the original password");
} else {
    alert("Incorrect password");
}
2.
{
    var greeting;
    var hour = 13;
    if (hour < 18) {
    greeting = "Good day";
    }
    else
    {
    greeting = "Good evening";
    }
    }

    4.


     var colors = ["red", "green", "blue", "yellow"];
    document.write(colors)
    
    
    // a
    
    var colors = ["red", "green", "blue", "yellow"];
    var userColor = prompt("Enter Your favourtie color to include our colors");
    colors.unshift(userColor);
    
    document.write(colors);
    
    
    // b
    
    var colors = ["red", "green", "blue", "yellow"];
    var userColor = prompt("Enter your color to add the End of the array");
    colors.push(userColor);
    
    document.write(colors);
    
    
    // c.
    
    var colors = ["red", "green", "blue", "yellow"];
    colors.unshift("pink", "aqua");
    
    document.write(colors);
    
    
    // d.
    
    var colors = ["red", "green", "blue", "yellow"];
    colors.shift();
    
    document.write(colors);
    
    
    // e.
    
    var colors = ["red", "green", "blue", "yellow"];
    colors.pop();
    
    document.write(colors);
    
    
    // f.
    
    var colors = ["red", "green", "blue", "yellow"];
    
    var colorIndex = +prompt("Enter index number to add the color.")
    var colorName = prompt("Enter color name.")
    
    colors.splice(colorIndex, 0, colorName)
    
    document.write(colors);
    
    
    // g.
    
    var colors = ["red", "green", "blue", "yellow"];
    
    var colorIndex = +prompt("Enter index number to remove the color.\n [red, green, blue, yellow]")
    var delNum = prompt("How many colors you want to remove.\n [red, green, blue, yellow]")
    
    colors.splice(colorIndex, delNum)
    
    document.write(colors);
    5.
    var score1 = prompt("Entre score 1.");
    var score2 = prompt("Entre score 2.");
    var score3 = prompt("Entre score 3.");

    var studentScore = [];

    var scoredPushed = studentScore.push(score1, score2, score3);
    var scoreSorted = studentScore.sort();

alert(studentScore);
6.
var PhoneProducts = [" Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write(PhoneProducts);
7.
var tableNumber = prompt("Enter the table number:");
var tableLength = prompt("Enter the table length:");
for (var i = 1; i <= tableLength; i++) {
    document.write(tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>");
}
8.
// a

for(var i = 1; i <= 15; i++){
    document.write(i + ", ")
   
}


// b

for (var i = 10; i > 0; i--) {
    document.write(i + ", ")
}


// c

for(var i = 0; i <= 20; i++){

    if(i % 2 == 0){
        document.write(i + ", ")
    }
}


// d

for(var i = 0; i < 20; i++){

    if(i % 2 != 0){
       document.write(i + ", ")

    }
}


e

for(var i = 1; i <= 20; i++){

    if(i % 2 == 0){
        document.write(i + "k, ")

    }
}
9.
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var Item = prompt("Enter any item to search:");
var found = false;
for (var i = 0; i < A.length; i++) {
    if (A[i] === Item) {
        found = true;
        break;
    }
}
if (found) {
    alert(Item + " is found in the list.");
} else {
    alert(Item + " is not found in the list.");
}
10.
var userText = prompt("Enter any word in capital latters")
var lowerText = userText.toLowerCase()

alert(userText + " = " + lowerText)
11.
var userText = prompt("Enter any word in small letters.");
var upperText = userText.toUpperCase();

alert(userText + " = " + upperText);
12.
var usernum = prompt("Enter any number.");

var userType;

if (usernum % 1 == 0) {
    userType = Number(usernum);

}
else {
    userType = usernum
}

alert("Converted " + usernum+ " in : " + userType);

    