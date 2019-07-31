"use strict";

const $ = require('jquery');
const appID = "76bedf3d011808dfb1e7486143c9e567";
const units = "metric";

$(document).ready(() => {
    $('#btn').click(() => {
        let city = $('#textInput').val();

        if (city === '') {
            $("#error").html("Please Input A City");
        }
        else {
            $.ajax({
                type: 'GET',
                url: (`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&APPID=${appID}`),
                dataType: 'jsonp',
                success: cityData => {
                    console.log(cityData);
                    $('#report').text('Weather Report:');
                    $('#cityName').text(`City Name: ${cityData.name}, ${cityData.sys.country}`);
                    $('#description').text(`Description: ${cityData.weather[0].description}`);
                    $('#temperature').text(`Temperature at ${Math.floor(cityData.main.temp)} \xB0C`);
                    $('#humidity').text(`Humidity levels at ${cityData.main.humidity}%`);
                }
            });
        }
    });
});