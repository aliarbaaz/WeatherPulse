// Fetch data for Kolkata
const op = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '7da4e11b23mshfe8548d7346bbfap11116ajsn8224258fec64',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + 'Kolkata', op)
    // fetch('https://api.weatherapi.com/v1/current.json?key=7da4e11b23mshfe8548d7346bbfap11116ajsn8224258fec64&q=Kolkata')

    .then(response => response.json())
    .then(data => {
        // Update the table with fetched data
        document.getElementById("kolkataCloud").textContent = data.current.cloud || '-';
        document.getElementById("kolkataFeelsLike").textContent = data.current.feelslike_c || '-';
        document.getElementById("kolkataHumidity").textContent = data.current.humidity || '-';
        document.getElementById("kolkataMaxTemp").textContent = data.current.temp_c || '-';
        document.getElementById("kolkataMinTemp").textContent = data.current.temp_c || '-';
        document.getElementById("kolkataSunrise").textContent = data.current.sunrise || '-';
        document.getElementById("kolkataSunset").textContent = data.current.sunset || '-';
        document.getElementById("kolkataTemp").textContent = data.current.temp_c || '-';
        document.getElementById("kolkataWindDegrees").textContent = data.current.wind_degree || '-';
        document.getElementById("kolkataWindSpeed").textContent = data.current.wind_kph || '-';
    })
    .catch(error => {
        console.log('Error:', error);
    });
