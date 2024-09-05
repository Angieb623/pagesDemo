// diplay your name
let myName = "Angie"

// an array of your three favorite books
let books = ["Little Red Riding Hood", "Goosebumps", "Berenstein Bears"]

//an arrya of the number of times those books were read
let timesRead = [20, 6, 29]

console.log(`myName = ${myName}`);
console.log(books);
console.log(timesRead);

// generate our first plot

// generate a trace - type of viz, along with x and y data stored in a JSON
let trace = {
    x: books,  // assigns the book names from the array as x-axis labels
    y: timesRead,  // assigns the number of times each book was read from the timesRead array as y-values
    type: 'bar' // specifies that this will be a bar chart
}


// put the trace into a list/array
let data = [trace];

// specify layout properties using JSON
let layout = {
    title: `${myName}'s First Plotly Chart`
}

// call Plotly.newPlot and point ot the visualization to the id in the HTML page
Plotly.newPlot("plot", data, layout);