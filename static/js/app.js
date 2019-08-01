// from data.js
var tableData = data;

// YOUR CODE HERE!

// Reference the table body
var tBody = d3.select("tbody");

// Console.log the data
console.log(tableData);

// Create an array for the objects
var columnNames = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// Use .forEach to loop through the array and append each row of the table
function loadData() {
    tableData.forEach(aliens => {
        var row = tBody.append("tr")
        columnNames.forEach(column => {
            if (column == "city" || column == "state" || column == "country" || column == "shape") {
                row.append("td").text(aliens[column])
            }
            else row.append("td").text(aliens[column])
        })
    })
}
// Use "loadData" to load the data onto the table
loadData()

// Assign a variable to each input field and use "d3.select" to reference each input field in the HTML  
var dateInput = d3.select("#datetime");
var cityInput = d3.select("#city");
var stateInput = d3.select("#state");
var countryInput = d3.select("#country");
var shapeInput = d3.select("#shape");


// Assign a variable to "Filter Table" an use "d3.select" to reference "filter-btn" in the HTML
var filterBtn = d3.select("#filter-btn");

// Assign a variablr to "Reset Table" and use "d3.select" to reference "reset-btn" in the HTML
var resetBtn = d3.select("#reset-btn");

// Call the function "filterData" to filter the data based on the input variables
function filterData() {

    // Use "d3.event" to access "preventDefault" method otherwise webpage will refresh by default
    d3.event.preventDefault();

    // Assign variables to pull the data for the entries on each input field
    var dateValue = dateInput.property("value")
    var cityValue = cityInput.property("value")
    var stateValue = stateInput.property("value")
    var countryValue = countryInput.property("value")
    var shapeValue = shapeInput.property("value")

    // Execute conditions to filter the data and assign to the input variables above
    var filteredData = tableData.filter(function (recorded) {
        return ((recorded.datetime === dateValue || dateValue == "") &&
            (recorded.city === cityValue || cityValue == "") &&
            (recorded.state === stateValue || stateValue == "") &&
            (recorded.country === countryValue || countryValue == "") &&
            (recorded.shape === shapeValue || shapeValue == "")
        )
    })

    // console.log the filtered data
    console.log(filteredData)

    // Clear the table to append filtered data 
    tBody.text("")

    // Populate the table with filtered data     
    filteredData.forEach(aliens => {
        var row = tBody.append("tr")
        columnNames.forEach(column => {
            if (column == "city" || column == "state" || column == "country" || column == "shape") {
                row.append("td").text(aliens[column])
            }
            else row.append("td").text(aliens[column])
        })
    })
}
// Add event listener for the "Filter Table" button
filterBtn.on("click", filterData)

// Creat a function to reset the table and load the data 
function resetData() {
    tBody.text("")
    loadData()
}

// Add event listener for the "Reset Table" button
resetBtn.on("click", resetData)



