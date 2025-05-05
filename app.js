const apiKey="8d8fe305e84cad8761d98fde3a5463a6";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search-box");
const searchBtn = document.querySelector(".button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed  + " km/hr";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "clear.png"
    }
    else if(data.weather[0].main =="Drizzle"){
        weatherIcon.src = "drizzle.png"
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "snow.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "mist.png"
    }
    
    document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

