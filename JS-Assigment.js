//Qsn No.1 : Write a JavaScript program to determine whether a given year is a leap year.

let checkLeapYear=()=>{
let year= prompt("Enter year");
if((year%4==0 && year%100!=0) || year%400==0)
 alert("Given Year is Leap Year"); 
else
  alert("Given Year is not Leap Year");
}
checkLeapYear();

//Qsn no.2 :  Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".

let guessNumber=()=>{
  let randomNumber= Math.floor(Math.random()*10);
  let userNumber= prompt("Enter Any Number from 1-10");
  if(userNumber==randomNumber)
    alert("GoodWork! You Guessed Correct Number: "+randomNumber);
  else
   alert("Not matched! Correct Number was "+randomNumber);
}
guessNumber();

//Qsn no.3 : Write a JavaScript program to calculate multiplication and division of two numbers (input from the user using HTML inputs).


let calculator=(operation)=>{
  let num1= parseFloat(document.getElementById('num1').value);
  let num2= parseFloat(document.getElementById('num2').value);
  if(operation == '+'){
    document.getElementById("result").value=num1+num2;
  }
   else if(operation == '-'){
    document.getElementById("result").value=num1-num2;
  }
   else if(operation == '*'){
    document.getElementById("result").value=num1*num2;
  }
   else if(operation == '/'){
    document.getElementById("result").value=num1/num2;
  }
}



//Qsn no.3: Write a program that prints numbers from 1 to 100. But for multiples of 3, print "Fizz" instead of the number, and for multiples of 5, print "Buzz." For numbers that are multiples of both 3 and 5, print "FizzBuzz."

let fizzBuzz=()=>{
  for (let index = 1; index <= 100; index++) {
    if(index%5==0 && index%3==0)
    document.writeln("fizzBuzz <br> ");
    else if(index%3==0)
    document.writeln("Fizz <br>");
    else if(index%5==0)
    document.writeln("Buzz <br>");
    else{
    document.writeln(index + "<br>");
   } 

  }
}
fizzBuzz();

//Qsn no. 4:Write a JavaScript program to evaluate a student's total marks across various examinations and determine their grade. The grading criteria are as follows:
//  - If the total marks fall within the range of 89 to 100 (inclusive), the student receives an A+ grade.
//  - If the examination is labeled as "Final-exam," the student will receive an A+ grade only if their total marks are 90 or greater. Assume that final examination means we pass 'true' as the second parameter otherwise blank.
//  - If the student achieves an A+ grade, the program should return 'true'; otherwise, it should return 'false'.

let checkResult=()=>{
  let marks= parseFloat(document.getElementById("mark").value);
  if (marks >= 89 && marks <= 100) {
    document.getElementById("grade").value = "A+";
  } else if (marks >= 80 && marks < 89) {
    document.getElementById("grade").value = "A";
  } else if (marks >= 70 && marks < 80) {
    document.getElementById("grade").value = "B+";
  } else if (marks >= 60 && marks < 70) {
    document.getElementById("grade").value = "B";
  } else {
    document.getElementById("grade").value = "Below B";
  }
}


// Qsn no.5:  Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not.
let primeChecker=(num)=>{
  let count=0;
  for(i=1;i<=num;i++){
   if(num%i==0)
    count++;  
  }
if(count==2){
  alert("Its is prime Number");
}
else{
  alert("Its is Composite Number");
}
}
let num= parseInt(prompt("Enter any Number to chech prime or not"));
primeChecker(num);









