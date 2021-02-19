/*

Friendly Weather App

*/

// console.log(fetch('https://ipinfo.io/'));

fetch('https://freegeoip.app/json/')
    .then(res => console.log(res));


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