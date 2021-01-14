                                                                // Chapter 1 

// alert("Error! Please enter a vlaid password");

// alert("Welcome to JS Land..." + "\n" + "Happy Coding!");

// alert("Welcome to JS Land");
// alert("Happy Coding");

                                                                // Chapter 2

// var username;

// var myname = "Abdul Wassay Ansari";

// var message = "Hello World";
// alert(message);

// var name = "Jhone Doe" ;
// var age = "15" ;
// var course = "Certified Mobile Application Development" ;
// alert( name ) ;
// alert(age) ;
// alert(course) ;

                                                                // Chapter 3


// var age = 21 ;
// alert(age) ;

// var count = 14 ;
// alert("You have visited this site " + count + " times")

// var birthyear = 1999 ;
// document.write("My birth year is " + birthyear + "<br>" );
// document.write("Data type of my declared variable is number") ;

// var visitorname = "John Doe" ;
// var product = "T-Shirt" ;
// var quantity = 5 ;
// document.write( visitorname + " ordered " + quantity + " " + product + "(s) on XYZ Clothing store.")

                                                                // Chapter 4


// var variable1 = 1 ;
//     variable2 = 2 ;
//     variable3 = 3 ; 

// illegal
// var 1t = 1 ;
// var 34asd = 2 ;
// var Ro se = 3 ;
// legal
// var t1 = 1 ;
// var asd3d = 2 ;
// var Rose = 3 ;

// var heading = "Rules for naming JS variables";
// document.write(heading + "<br>") ;
// document.write("Variable names can only contain numbers " + "<br>") ;
// document.write("Variable names are case sensitive" + "<br>") ;
// document.write("Variable names should not be JS keywords" + "<br>") ;

                                                                // Chapter 5

// var num1 = 5 ;
// var num2 = 3 ;
// var num3 = num1 + num2 ;
// document.write( "Sum of " + num1 + " and " + num2 + " is " + num3 ) ;

// var num1 = 5 ;
// var num2 = 3 ;
// var num3 = num1 - num2 ;
// document.write( "Subtraction of " + num1 + " and " + num2 + " is " + num3 ) ;

// var num1 = 5 ;
// var num2 = 3 ;
// var num3 = num1 * num2 ;
// document.write( "Multiplication of " + num1 + " and " + num2 + " is " + num3 ) ;

// var num1 = 5 ;
// var num2 = 3 ;
// var num3 = num1 / num2 ;
// document.write( "Division of " + num1 + " and " + num2 + " is " + num3 ) ;

// var num1 = undefined ;
// document.write("Value after variable declaration is " + num1 + "<br>" )  ;
// num1 =  5 ;
// document.write("Initial Value is  " + num1 + "<br>" ) ; 
// num1 = num1 + 1 ; 
// document.write("Value after increment " + num1 + "<br>" )  ;
// num1 = num1 + 7 ;
// document.write("Value after addition " + num1 + "<br>" ) ;
// num1 = num1 - 1 ;
// document.write("Value after decrement " + num1 + "<br>" ) ;
// num1 = num1 % 3 ;
// document.write("The remainder is " + num1 ) ;


                                                                // Chapter 6-9

// Q1

// var a = 10

// document.write("Result:" + "<br>")
// document.write("The value of a is: " + a + "<br>");
// document.write("<br>")
// document.write("The value of ++a is: " + ++a + "<br>");
// document.write("Now the value is :" + a + "<br>")
// document.write("<br>")
// document.write("The value of a++ is: " + a++ + "<br>");
// document.write("Now the value is :" + a + "<br>")
// document.write("<br>")
// document.write("The value of --a is: " + --a + "<br>");
// document.write("Now the value is :" + a + "<br>")
// document.write("<br>")
// document.write("The value of a-- is: " + a-- + "<br>");
// document.write("Now the value is :" + a + "<br>")

// Q2

// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b-- ;
// document.write("--a: " + --a + "<br>" );
// document.write("--a - --b: " +  --b + "<br>" );
// document.write("--a - --b + ++b: " +  + ++b + "<br>" );
// document.write("--a - --b + ++b + b-- : " +  + b-- + "<br>" );

// Q3

// var username = prompt("Username")
// alert("Welcome " + username)

// Q5

// var number = prompt("Enter number")
// for( i=1; i<=10; i++){
//     document.write(number * i + "<br>")
//     }


                                                                // Chapter 9-11

// Q1

// var city = prompt("Enter City Name")

// if(city === "Karachi"){
//     alert("Welcome to city of lights")
// }

// Q2

// var gender = prompt("Gender = male/female");

// if(gender === "male"){
//     alert("Good Morning Sir")
// }if(gender === "female"){
//     alert("Good Morning Ma'am")
// }

// Q4

// var fuel = prompt("Enter remaining fuel in litres")
// if(fuel <= 0.25){
//     alert("Please refill the fuel in car")
// }else{
//     alert("You are good to go")
// }

// Q5

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }                


// Q6

// var total = prompt("Enter total marks");
// var marks = prompt("Enter marks obtained")

// document.write( "Total Marks: " + total + "<br>" );
// document.write( "Marks obtained: " + marks + "<br>" );

// var percentage = marks/total * 100
// document.write("Percentage: " + percentage + "<br>" );

// if( percentage >= 80 && percentage <= 100 ){
// document.write("Grade: A+")
// }
// if( percentage >= 70 && percentage <= 79 ){
//     document.write("Grade: A")
// }
// if(percentage >= 60 && percentage <= 69 ){
//     document.write("Grade: B")
// }
// if(percentage >= 50 && percentage <= 59 ){
//     document.write("Grade: C")
// }
// if(percentage >= 40 && percentage <= 49 ){
//     document.write("Grade: D")
// }
// if(percentage >= 33 && percentage <= 39 ){
//     document.write("Grade: E")
// }
// if(percentage >= 0 && percentage <= 33){
//     document.write("Grade: F")
// }









                                                                // Changing case
// Q1

// var user = prompt("Enter");
// user = user.toUpperCase();
// alert(user);

                                                                // Strings: measuring length and extracting parts

// Q1

// var phone = prompt("Your phone model");
// alert(phone.length);

// Q2

// var phone = prompt("Your phone model");
// phone = phone.charAt(phone.length - 1);
// alert(phone);


                                                                // Strings: finding segments
                            
// var text = "Pakistani";                                                          
// for (var i = 0; i < text.length; i++) {
//     if( text.charAt(i) === "n"){
//         document.write(text.length);
//     }
// }

// var user = prompt("Enter Username");
// for ( var i = 0; i < user.length; i++ ){
//     if ( user.charAt(i) === "@" || "!" || "," ){
//         alert("Enter correct username");
//         break;
//     }
// }

// var text = "The quick brown fox jumps over the lazy dog.";

// for ( var i = 0; i < text.length; i++ ){
//     if ( text.charAt(i) === "the"){
//         document.write(text);
//     }
// }

                                                                //Strings: finding a character at a location

// Q1

// var text = "Pakistani"
// var find = text.charAt(2);
// document.write(find);

                                                                
                                                                // Strings: replacing characters


// Q1

// var text = "Hyderabad"
// var newtext = text.replace("Hyder","Islam");
// document.write(newtext);


// Q2

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newmessage = message.replace(/and/g,"&");
// document.write(newmessage);


                                                                //Rounding numbers


// Q1

// var number = 3.142;
// var roundnumber = Math.round(number);
// var ceilnumber = Math.ceil(number);
// var floornumber = Math.floor(number);
// document.write(roundnumber + "<br>" );
// document.write(ceilnumber + "<br>" );
// document.write(floornumber);

// Q2

// var number = -2.678;
// var roundnumber = Math.round(number);
// var ceilnumber = Math.ceil(number);
// var floornumber = Math.floor(number);
// document.write(roundnumber + "<br>" );
// document.write(ceilnumber + "<br>" );
// document.write(floornumber);



                                                                //Converting strings to integers and decimals

// Q1

// var weight = prompt("Enter your weight");
// var newweight = parseInt(weight);
// document.write(newweight + " kg");

                                                                //Converting strings to numbers, numbers to strings


// Q1

// var string = "472";
// document.write(string + " is a string" + "<br>")
// var number = Number(string);
// document.write(number + " is now a number");

// Q2

// var num = 35.36;
// var number = num.toString();
// var number = number.replace("." , "");
// document.write(number);


                                                                //Controlling the length of decimals


// Q1

// var percentage = 30 / 45 * 100;
// var total = percentage.toFixed(2);
// document.write(total);