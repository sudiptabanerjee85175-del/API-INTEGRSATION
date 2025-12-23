// TASK 1: Weather API
function getWeather() {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=28.61&longitude=77.20&current_weather=true")
        .then(response => response.json())
        .then(data => {
            document.getElementById("weather").innerHTML =
                "Temperature: " + data.current_weather.temperature + " °C <br>" +
                "Wind Speed: " + data.current_weather.windspeed + " km/h";
        });
}

// News API
function getNews() {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
        .then(response => response.json())
        .then(data => {
            let list = document.getElementById("news");
            list.innerHTML = "";

            data.forEach(item => {
                let li = document.createElement("li");
                li.innerText = item.title;
                list.appendChild(li);
            });
        });
}
