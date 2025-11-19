
document.getElementById("btnPokemon").addEventListener("click", buscarPokemon);

function buscarPokemon() {
    const nombre = document.getElementById("pokemon").value.toLowerCase();
    const resultado = document.getElementById("resultadoPokemon");

    if (nombre === "") {
        resultado.innerHTML = "<p>Ingrese un nombre o ID</p>";
        return;
    }

    fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
        .then(res => res.json())
        .then(data => {
            resultado.innerHTML = `
                <h3>${data.name.toUpperCase()}</h3>
                <img src="${data.sprites.front_default}">
                <p>Tipo: ${data.types[0].type.name}</p>
                <p>Peso: ${data.weight}</p>
            `;
        })
        .catch(() => {
            resultado.innerHTML = "<p>Pokémon no encontrado</p>";
        });
}
