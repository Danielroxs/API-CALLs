let form = document.getElementById("form-container");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let city = document.getElementById("city").value;

    try {
        // Llamada a la API para obtener los datos del clima
        const response = await getWeatherData(city);

        if (!response || response.cod !== 200) {
            throw new Error("Ciudad no encontrada o error en la API");
        }

        const { main, clouds, wind } = response;

        // Mostrar la sección del clima
        const section = document.getElementById("temp-section");
        section.style.display = "flex";

        // Actualizar los datos del DOM
        document.getElementById("min-temp").textContent = Math.trunc(main.temp_min - 273.15);
        document.getElementById("current-temp").textContent = Math.trunc(main.temp - 273.15);
        document.getElementById("max-temp").textContent = Math.trunc(main.temp_max - 273.15);
        document.getElementById("humidity").textContent = main.humidity;
        document.getElementById("pressure").textContent = main.pressure;
        document.getElementById("clouds").textContent = clouds.all;
        document.getElementById("wind").textContent = wind.speed;

    } catch (error) {
        // Manejo de errores
        console.error("Error al obtener los datos del clima:", error.message);
        alert("Ocurrió un error. Por favor, verifica la ciudad ingresada.");
    }
});

async function getWeatherData(city) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d336d0c58ac09f405fa5aa551a1dc544`
        );

        if (!response.ok) {
            throw new Error("Error en la respuesta de la API");
        }

        return await response.json();
    } catch (error) {
        // Captura errores relacionados con fetch
        console.error("Error en getWeatherData:", error.message);
        throw error; // Re-lanzar el error para que pueda ser manejado por el caller
    }
}
