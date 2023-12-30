const apikey= "7a894ebc778083fe2d1ae6194fc42f78";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weatherDisplay = document.querySelector(".weather");
const errorDisplay = document.querySelector(".error");

// Hide weather and error sections on initial load
weatherDisplay.style.display = "none";
errorDisplay.style.display = "none";

async function fetchWeather(city) {
    try {
        const response = await fetch(url + city + `&appid=${apikey}`);

        console.log("Response status:", response.status);

        if (response.status === 404) {
            errorDisplay.style.display = "block";
            weatherDisplay.style.display = "none";
        } else {
            const data = await response.json();
            console.log("Weather data:", data);

            // The rest of your code to update DOM elements based on the data...
            document.querySelector(".city").textContent = data.name;
            document.querySelector(".temp").textContent = data.main.temp + "°C";
            document.querySelector(".humidity").textContent = data.main.humidity + "%";
            document.querySelector(".wind").textContent = data.wind.speed + "km/h";

            // Set weather icon based on weather condition (you can keep your existing logic for this)

            weatherDisplay.style.display = "block";
            errorDisplay.style.display = "none";
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}


searchBtn.addEventListener("click", () => {
    const cityName = searchBox.value.trim();
    if (cityName !== "") {
        fetchWeather(cityName);
    } else {
        alert("Please enter a city name.");
    }
});
