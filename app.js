//scripts

// Time JS
function displaytime(){
    var session = '';
    var month = ["Jaunary", "February", "March", "April", "May", "June", "July", 
                 "August", "September", "October", "November", "December"];
    var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
                   "Saturday"];

    var today = new Date();
    var day = today.getDay();
    var date = today.getFullYear() + "/" + (today.getMonth()+1) + "/" + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    if (today.getHours() >= 12){
        session = "PM";
    } else{
        session = "AM";
    }

    document.getElementById("displayDate").innerHTML = daylist[day] + ", " + month
    [today.getMonth()] + " " + today.getDate();
    document.getElementById("displayDateTime").innerHTML = date + " " + time + " " + session;
}

setInterval(displaytime, 10);


// Temperature JS
let celsiusInput = document.querySelector("#celsius > input");
let fahrenheitInput = document.querySelector("#fahrenheit > input");
let kelvinInput = document.querySelector("#kelvin > input");

let btn = document.querySelector(".button button");

function roundNumber(number) {
    return Math.round(number*100)/100
}

// Celsius to Fahrenheit and Kelvin
celsiusInput.addEventListener('input', function() {
    let cTemp = parseFloat(celsiusInput.value)
    let fTemp = (cTemp*(9/5)) + 32
    let kTemp = cTemp + 273.15

    fahrenheitInput.value = roundNumber(fTemp)
    kelvinInput.value = roundNumber(kTemp)
})


// Fahrenheit to celsius and kelvin
fahrenheitInput.addEventListener('input', function() {
    let fTemp = parseFloat(fahrenheitInput.value)
    let cTemp = (fTemp - 32) * (5/9)
    let kTemp = (fTemp - 32) * (5/9) + 273.15

    celsiusInput.value = roundNumber(cTemp)
    kelvinInput.value = roundNumber(kTemp)
})


// Kelvin to celsius and fahrenheit
kelvinInput.addEventListener('input', function() {
    let kTemp = parseFloat(kelvinInput.value)
    let cTemp = kTemp - 273.15
    let fTemp = (kTemp - 273.15) * (9/5) + 32

    celsiusInput.value = roundNumber(cTemp)
    fahrenheitInput.value = roundNumber(fTemp)
})

btn.addEventListener("click", () => {
    celsiusInput.value = ""
    fahrenheitInput.value = ""
    kelvinInput.value = ""
})
