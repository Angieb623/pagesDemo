// get an array of ratings
let ratings = ['G', 'PG', 'PG-13', 'R'];

// get the metric (film length)
let metric = "length";

// function that will calculate and plot the average of a metric based on ratings
function plotMetric(films, ratings, metric)
{
    // array to hold the average lengths of films by rating
    let avgLengthByRating = []

    // loop through the ratings
    for (let i = 0; i < ratings.length; i++)
        {
            // store the current rating
            rating = ratings[i];
            
            // variables to hold the count of occurrences of the rating and the total length
            let count = 0;
            let total = 0;
            // loop through the array of films
            for (let j = 0; j < films.length; j++)
            {
                // get each film
                let film = films[j];
                
                // compare the film's rating to the current rating
                if(film.rating == rating)
                {
                    // add on to the count of the occurrences of the rating
                    count += 1;
                    // get the total length
                    total += film["length"];
                }
            }
            // calculate the average length and add to the array
            avgLengthByRating.push(total / count);
        }

        // create the trace
    let trace = {
        x: ratings,
        y: avgLengthByRating,
        type: "bar"
    };
    // make the data array
    let data = [trace];
    // set up the layout
    let layout = {
        title: "Pagila Films Average Film Lengths by Rating"
    };
    // call Plotly.newPlot()
    Plotly.newPlot("plot", data, layout);
}

// call the function
plotMetric(films, ratings, metric);