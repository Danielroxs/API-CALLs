let form = document.getElementById("form-container");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let city = document.getElementById("city").value;

    getWeatherData(city).then((response) => {
        const { main, clouds, wind } = response;
        const section = document.getElementById("temp-section");
        section.style.display = "flex";

        const minTemp = document.getElementById("min-temp");
        minTemp.textContent = Math.trunc(main.temp_min - 273.15);
        const currentTemp = document.getElementById("current-temp");
        currentTemp.textContent = Math.trunc(main.temp - 273.15);
        const maxTemp = document.getElementById("max-temp");
        maxTemp.textContent = Math.trunc(main.temp_max - 273.15);

        const humidity = document.getElementById("humidity");
        humidity.textContent = main.humidity;
        const pressure = document.getElementById("pressure");
        pressure.textContent = main.pressure;

        const frontClouds = document.getElementById("clouds");
        frontClouds.textContent = clouds.all;
        const frontWind = document.getElementById("wind");
        frontWind.textContent = wind.speed;
    });
});

function getWeatherData(city) {
    return fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d336d0c58ac09f405fa5aa551a1dc544`
    ).then((response) => response.json());
    /*  .then((reponse) => {
        if (!reponse.ok) {
          throw new Error("Ciudad no encontrada");
        }
        return reponse.json();
      })
      .then((data) => {
        console.log("Datos del clima", data);
      })
      .catch((error) => {
        console.error("Ocurrio un error: ", error.message);
        alert("No se pudo encontrar la ciudad. Por favor intentelo de nuevo.");
      }); */
}
