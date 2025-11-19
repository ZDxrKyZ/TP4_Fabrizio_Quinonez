
document.getElementById("btnPais").addEventListener("click", buscarPais);

function buscarPais() {
    const pais = document.getElementById("pais").value;
    const resultado = document.getElementById("resultadoPais");

    if (pais === "") {
        resultado.innerHTML = "<p>Ingrese un país</p>";
        return;
    }

    fetch(`https://restcountries.com/v3.1/name/${pais}`)
        .then(res => res.json())
        .then(data => {
            const p = data[0];

            resultado.innerHTML = `
                <h3>${p.name.common}</h3>
                <p>Capital: ${p.capital ? p.capital[0] : "Sin datos"}</p>
                <p>Población: ${p.population}</p>
                <img src="${p.flags.svg}" width="200">
            `;
        })
        .catch(() => {
            resultado.innerHTML = "<p>No se encontró el país</p>";
        });
}
