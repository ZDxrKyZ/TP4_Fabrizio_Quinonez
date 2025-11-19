
document.getElementById("btnRick").addEventListener("click", buscarPersonaje);

function buscarPersonaje() {
    const id = document.getElementById("rickID").value;
    const resultado = document.getElementById("resultadoRick");

    if (id === "") {
        resultado.innerHTML = "<p>Ingrese un ID</p>";
        return;
    }

    fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(res => res.json())
        .then(data => {
            resultado.innerHTML = `
                <h3>${data.name}</h3>
                <img src="${data.image}">
                <p>Estado: ${data.status}</p>
                <p>Especie: ${data.species}</p>
            `;
        })
        .catch(() => {
            resultado.innerHTML = "<p>ID no encontrado</p>";
        });
}
