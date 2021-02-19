
const app = {};

app.pEl = document.querySelector('p');
app.h2El = document.querySelector('h2');

const coordinates = fetch('https://freegeoip.app/json/')
    .then(res => res.json())
        .then(jsonRes => [jsonRes.latitude, jsonRes.longitude])
            .then(coordinates => {
                app.lat = coordinates[0];
                app.lon = coordinates[1];

                const openWeatherUrl = new URL('https://api.openweathermap.org/data/2.5/weather');
                openWeatherUrl.search = new URLSearchParams({
                    lat: app.lat,
                    lon: app.lon,
                    appid: 'f5daff7dc1836c7459dbcc4ca6644537'
                });
                fetch(openWeatherUrl).then(res => res.json())
                    .then(jsonRes => {
                        app.h2El.textContent = `The current temperature in ${jsonRes.name} is ${(jsonRes.main.temp - 273.15).toFixed()}° Celcius.`
                        app.pEl.textContent = `Your GPS Coordinates are ${app.lat}, ${app.lon}.`
                    });
            });