
document.getElementById("btnBienvenida").addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const usuarioDiv = document.getElementById("usuario");

    if(nombre === "" || apellido === ""){
        alert("Por favor ingresá tu nombre y apellido.");
        return;
    }

    usuarioDiv.innerHTML = `<h3>¡Bienvenido ${nombre} ${apellido}!</h3>`;
    document.getElementById("bienvenida").style.display = "none";
});
