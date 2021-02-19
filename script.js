/*

Friendly Weather App

*/

// console.log(fetch('https://ipinfo.io/'));

const app = {};

app.pEl = document.querySelector('p');
app.h2El = document.querySelector('h2');

const coordinates = fetch('https://freegeoip.app/json/')
    .then(res => res.json())
        .then(jsonRes => [jsonRes.latitude, jsonRes.longitude])
            .then(coordinates => {
                app.lat = coordinates[0];
                app.lon = coordinates[1];

                const openWeatherUrl = new URL('http://api.openweathermap.org/data/2.5/weather');
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






// const url = new URL('http://proxy.hackeryou.com');
// url.search = new URLSearchParams({
//     reqUrl: 'https://freegeoip.app/json/'
// });

// fetch(url).then(res => res.json())
//     .then(jsonRes => console.log(jsonRes));


// axios({
//     method:'GET',
//     url: 'http://proxy.hackeryou.com',
//     //OR url: 'https://proxy.hackeryou.com',
//     responseType:'json',
//     params: {
//       reqUrl: 'https://freegeoip.app/json/',
//       proxyHeaders: {
//         'header_params': 'value'
//       },
//     },
//       xmlToJSON: false
//     }).then((res) => {
//       console.log(res);
//     });