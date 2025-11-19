
document.getElementById("btnCripto").addEventListener("click", buscarCripto);

function buscarCripto() {
    const moneda = document.getElementById("cripto").value;
    const resultado = document.getElementById("resultadoCripto");

    if (moneda === "") {
        resultado.innerHTML = "<p>Seleccione una criptomoneda</p>";
        return;
    }

    fetch(`https://api.coingecko.com/api/v3/coins/${moneda}`)
        .then(res => res.json())
        .then(data => {
            resultado.innerHTML = `
                <h3>${data.name}</h3>
                <p>💵 Precio: $${data.market_data.current_price.usd}</p>
                <p>📉 Cambio 24h: ${data.market_data.price_change_percentage_24h.toFixed(2)}%</p>
                <p>🏦 Market Cap: $${data.market_data.market_cap.usd.toLocaleString()}</p>
            `;
        })
        .catch(() => {
            resultado.innerHTML = "<p>Error al cargar los datos</p>";
        });
}
