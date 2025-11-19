
const apiKey = "TU_API_KEY_AQUI"; 

document.getElementById("btnClima").addEventListener("click", buscarClima);

function buscarClima() {
    const ciudad = document.getElementById("ciudad").value;
    const resultado = document.getElementById("resultadoClima");

    if (ciudad === "") {
        resultado.innerHTML = "<p>Ingrese una ciudad</p>";
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.cod === "404") {
                resultado.innerHTML = "<p>Ciudad no encontrada</p>";
                return;
            }

            resultado.innerHTML = `
                <h3>Clima en ${data.name}</h3>
                <p>🌡 Temperatura: ${data.main.temp}°C</p>
                <p>💧 Humedad: ${data.main.humidity}%</p>
                <p>🌥 ${data.weather[0].description}</p>
            `;
        })
        .catch(() => {
            resultado.innerHTML = "<p>Error al conectar con la API</p>";
        });
}
