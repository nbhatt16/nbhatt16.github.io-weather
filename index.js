var APIKey = "e690b42714166f5025464e2332b4e39f";
var getInput = document.querySelector("#city-input");

$(".city-search").on("click", function(){
    event.preventDefault()
    console.log("clicked");

    

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + getInput.value + "&appid=" + APIKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response){
        console.log(response);
        $("#city-name").text(response.name)
        var tempF = (response.main.temp - 273.15)
        $("#temp").text("Temperature: " + tempF)
        $("#wind").text("Wind Speed: " + response.wind.speed )
        var tempA = (response.main.temp_min - 273.15)
        $("#temp-min").text("Min Temp: " + tempA)
        var tempB = (response.main.temp_max - 273.15)
        $("#temp-max").text("Max Temp" + tempB)
        $("#humid").text("Humidity:" + response.main.humidity +"%")
    });
    var queryURL = "  https://api.openweathermap.org/data/2.5/forecast?q=" + getInput.value + "&appid=" + APIKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response){
        $("#city-name5").text(response.name)
        var tempF = (response.main.temp - 273.15)
        $("#temp5").text("Temperature: " + tempF)
        $("#wind5").text("Wind Speed: " + response.wind.speed )
    })

});