// ------------------------------------------
// Manejo de navegación
// ------------------------------------------

const buttons = document.querySelectorAll(".nav-button");
const tabs = document.querySelectorAll(".tab-content");

document.addEventListener("DOMContentLoaded", () => {
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const target = button.getAttribute("data-tab");

            // Actualizar visibilidad de pestañas
            tabs.forEach(tab => {
                tab.classList.remove("active");
                if (tab.id === target) {
                    tab.classList.add("active");
                }
            });

            // Actualizar el botón activo
            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
        });
    });

    cargarListaCanciones(); // Se ejecuta al cargar la página
});

// ------------------------------------------
// Lista de canciones 
// ------------------------------------------

const canciones = [
    { id: 2, titulo: "Joga bonito", artista: "Barry B", imagen: "./img/img2.jpg", fuente: "https://mi-musica.com/tema-2.mp3" },
    { id: 3, titulo: "Persona sospechosa", artista: "Punsetes y La milagrosa", imagen: "./img/img3.png", fuente: "https://mi-musica.com/tema-3.mp3" },
    { id: 4, titulo: "Verdes, césped", artista: "Carolina Durante", imagen: "./img/img4.jpeg", fuente: "https://mi-musica.com/tema-4.mp3" },
    { id: 5, titulo: "arghHhhh!", artista: "Shego", imagen: "./img/img5.jpg", fuente: "https://mi-musica.com/tema-5.mp3" }
];

const containerCanciones = document.querySelector("#containerCanciones");

function cargarListaCanciones() {
    canciones.forEach(tema => {
        // Crear la tarjeta para cada canción
        const card = document.createElement("li");
        card.classList.add("cardCancion");
        card.onclick = () => cargarCancion(tema.id); // Asignar el clic a cada tarjeta

        // Crear el contenido de la tarjeta
        card.innerHTML = `
           <img src="${tema.imagen}" class="imgCancion" alt="${tema.titulo}">
           <div class="infoCancion">
           <h2 class="tituloCancion">${tema.titulo}</h2>
           <p class="nombreArtista">${tema.artista}</p>
           </div>
       `;

        // Agregar la tarjeta al contenedor
        containerCanciones.appendChild(card);
    });
}

function cargarCancion(id) {
    const cancion = canciones.find(c => c.id === id);
    if (cancion) {
        document.querySelector("audio").src = cancion.fuente;
        document.querySelector("#cancionActual").textContent = `Canción Actual: ${cancion.titulo}`;
        document.querySelector("audio").play();
    }
}