// circumference = 2(pi)(r) 

const PI = 3.14159;
let radius;
let circumference;

// Creates a function for the "mySubmit" button upon click.
document.getElementById("mySubmit").onclick = function(){
    // Assigns "myText" input as a value of radius
    radius = document.getElementById("myText").value;
    // Converts radius into an integer datatype
    radius = Number(radius);
    // Finally, we can execute the Circumference Formula and compute the results
    circumference = 2 * PI * radius;
    // Assigns circumference to h3 and will display in the webpage as a header
    circumference = document.getElementById("myH3").textContent = circumference;
    // logs circumference results to console
    console.log(circumference);
}

