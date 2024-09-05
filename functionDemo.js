/*
    python function

    def printHello():
        print("Hello")

*/

function printHello()
{
    // simple output 
    console.log("Hello");
}

// use the function
printHello();

// add two values together
function addition(a, b)
{
    // returm the sum
    return a + b;
}

// display a result of the function call
console.log(addition(100, 50));

// store the result in a variable
let result = addition(1000, 999);

// diplay the variable
console.log(result);

// array of cohort students
let cohortMembers = ["Cindy", "Bri", "Josh", "Aaron"];

//function that processes an array
function arrayDisplay(cohortList)
{
    for (let i = 0; i < cohortList.length; i++)
        {
            console.log(cohortList[i]);
        }
}

// call the arrayDisplay function
arrayDisplay(cohortMembers);

//  console log to display a line of dashes
console.log("---------------------------");

// Array of movie ratings
let movieScore = [4.4, 3.3, 5.9, 8.8, 1.2, 5.2, 7.4, 7.5, 7.2, 9.7, 4.2, 6.9];

// make a mean function
    // take the sum of all of the values
    // then divide by the count (length of the array) of all of the values 
function mean(scoreList)
{
        // declare a variable that holds the running total
        let total = 0;
        // use a loop to loop through the array and add on to the running total
        for(let i = 0; i < scoreList.length; i++)
        {
            total += scoreList[i];    
        }
        // return the total / length of the array
        return total / scoreList.length;
}

// make a variance function
    // take each value, subtract the mean, square the difference, add on total square difference,
    // then take an average of the squared differences
function variance(scoreList)
{
        // variable to hold the total of squared differences
        let total = 0;
        // get the mean from the mean function
        let meanValue = mean(scoreList);
        // loop through the array and take the square differences of values from the means
        // and add on to the total squared differences
        for (let i = 0; i < scoreList.length; i++)
        {
            total += (scoreList[i] - meanValue) ** 2; // using ** raises a value to a power
        }
        // calculate and return the variance
        return total / scoreList.length;
}



// Print to the console the Movie Statistical Analysis
// to see a set number if decimal places, use the .toFixed()
console.log("Movie Statistical Analysis");
console.log("--------------------------");
console.log(`The mean is : ${mean(movieScore).toFixed(2)}`);
console.log(`The variance is : ${variance(movieScore).toFixed(2)}`);
console.log(`The standard deviation is : ${Math.sqrt(variance(movieScore)).toFixed(2)}`);
