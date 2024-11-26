/* let form = document.getElementById("form-container");

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
} */


function setupEventListeners() {
    const form = document.getElementById("form-container");
    form.addEventListener("submit", handleFormSubmit);
}

function updateDOMWithWeatherData(data) {
    const { main, clouds, wind } = data;

    document.getElementById("min-temp").textContent = Math.trunc(main.temp_min - 273.15);
    document.getElementById("current-temp").textContent = Math.trunc(main.temp - 273.15);
    document.getElementById("max-temp").textContent = Math.trunc(main.temp_max - 273.15);
    document.getElementById("humidity").textContent = main.humidity;
    document.getElementById("pressure").textContent = main.pressure;
    document.getElementById("clouds").textContent = clouds.all;
    document.getElementById("wind").textContent = wind.speed;

    document.getElementById("temp-section").style.display = "flex";
}

async function handleFormSubmit(e) {
    e.preventDefault();

    try {
        //1. validar la entrada del usuario
        const city = document.getElementById("city").value;
        if (!city.trim()) {
            alert("Por favor, ingresa una ciudad.");
            return;
        }
        //2. llamar a la API para obtener los datos del clima
        const weatherData = await getWeatherData(city);

        //3. Actualizamos los datos del DOM con los nuevos valores
        updateDOMWithWeatherData(weatherData);
    } catch (error) {
        //4. Manejo de errores y mostrar un mensaje de error al usuario
        alert("Ocurrio un error:" + error.message);
    }
}

async function getWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d336d0c58ac09f405fa5aa551a1dc544`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Ciudad no encontrada o error en la API");
        }

        return await response.json();
    } catch (error) {
        console.error("Error en getWeatherData:", error.message);
        throw error;
    }
}

function initApp() {
    setupEventListeners();
}

document.addEventListener("DOMContentLoaded", initApp)