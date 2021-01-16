window.onload = function () {
    changeColour();
}
// // Below will display the current date and day for the day you use the webpage
// This uses moment.js to give the date, everything is the brackets can be amended to whatever date format you choose.
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

// The function below will change the colours of the hours of the day depending on the current time
// The below uses moment.js to record the current time in to a variable
var currentTime = moment().format("H");
console.log(currentTime)

// the function below uses the variable above, along with if and else statements to change the colour of the time block for that day.
// This is then repeated for each time of the day
function changeColour() {
    // 9 AM
    if (currentTime > 9) {
        $("#9AM").addClass("past");
    }
    else if (currentTime >= 9 && currentTime < 10) {
        $("#9AM").addClass("present");
    }
    else if (currentTime < 9) {
        $("#9AM").addClass("future");
    }
    // 10 AM
    if (currentTime > 10) {
        $("#10AM").addClass("past");
    }
    else if (currentTime >= 10 && currentTime < 11) {
        $("#10AM").addClass("present");
    }
    else if (currentTime < 10) {
        $("#10AM").addClass("future");
    }
    if (currentTime > 11) {
        $("#11AM").addClass("past");
    }
    else if (currentTime >= 11 && currentTime < 12) {
        $("#11AM").addClass("present");
    }
    else if (currentTime < 11) {
        $("#11AM").addClass("future");
    }
    if (currentTime > 12) {
        $("#12PM").addClass("past");
    }
    else if (currentTime >= 12 && currentTime < 13) {
        $("#12PM").addClass("present");
    }
    else if (currentTime < 12) {
        $("#12PM").addClass("future");
    }
    if (currentTime > 13) {
        $("#13PM").addClass("past");
    }
    else if (currentTime >= 13 && currentTime < 14) {
        $("#13PM").addClass("present");
    }
    else if (currentTime < 13) {
        $("#13PM").addClass("future");
    }
    if (currentTime > 14) {
        $("#14PM").addClass("past");
    }
    else if (currentTime >= 14 && currentTime < 15) {
        $("#14PM").addClass("present");
    }
    else if (currentTime < 14) {
        $("#14PM").addClass("future");
    }
    if (currentTime > 15) {
        $("#15PM").addClass("past");
    }
    else if (currentTime >= 15 && currentTime < 16) {
        $("#15PM").addClass("present");
    }
    else if (currentTime < 15) {
        $("#15PM").addClass("future");
    }
    if (currentTime > 16) {
        $("#16PM").addClass("past");
    }
    else if (currentTime >= 16 && currentTime < 17) {
        $("#16PM").addClass("present");
    }
    else if (currentTime < 16) {
        $("#16PM").addClass("future");
    }
    if (currentTime > 17) {
        $("#17PM").addClass("past");
    }
    else if (currentTime >= 17 && currentTime < 18) {
        $("#17PM").addClass("present");
    }
    else if (currentTime < 17) {
        $("#17PM").addClass("future");
    }
}