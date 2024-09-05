// conditions in JS


/*
    < - less than
    > - greater than
    >= less than or equal to
    <= greater than or equal to

    ==  is equal to (compares across data types)
        1 == "1"  (this would be True)

    === is equal to  (does not compare across data types)
        1 == "1"  (this would be False)

    !   logical not

    ||  logical or

    &&  logical and
*/

let num1 = 1
let num2 = 1

// single alternative decision - if statement
if(num1 == num2)
{
        console.log("num1 and num2 are equal");
}

let num3 = 3
let num4 = 4
// dual alternative if / else statement
 if(num3 == num4)
{
     console.log("num3 and num4 are equal");
}
 else
{
        console.log("num3 and num4 are not equal");
}

// if / else if - multiple alternative
let num5 = 5
let num6 = 5
if(num5 > num6)
{
        console.log("num5 is greater than num6");
}
else if(num6 > num5)
{
        console.log("num6 is greater than num5");
}
else
{
        console.log("num5 and num6 are equal");
}

// loops in JS
    // loop uses the loop control variable i to run 10 times counting from 0-9
for(let i = 0; i < 10; i++)
{
    console.log(i);  //display the current value of i inside of the console
}

// declare an array of cohort member names
students = ["Tim B", "Stacy C", "Dylan D", "Nolan S", "Sonu O"];

// use .length property to control the number of iterations
// loop display each student's name in the array to the console
for (let j = 0; j < students.length; j++)
    {
        console.log(students[j]); // display each student's name by referencing the index of the student's array
    }