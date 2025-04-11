const eventos = [
    {
        titulo: "Herramientas Colaborativas para el Trabajo Virtual.",
        fechaTexto: "Miércoles 16 de abril - de 12:15 a 13:15 hs",
        fecha: "2025-04-16T12:15:00"
    },
    {
        titulo: "Organización del tiempo y gestión colaborativa del trabajo.",
        fechaTexto: "Miércoles 23 de abril - de 12:15 a 13:15 hs",
        fecha: "2025-04-23T12:15:00"
    },
    {
        titulo: "Organización del tiempo y gestión colaborativa del trabajo.",
        fechaTexto: "Miércoles 9 de abril - de 12:15 a 13:15 hs",
        fecha: "2025-04-09T12:15:00"
    }
];

const ahora = new Date();
const contProximas = document.getElementById('proximas');
const contAnteriores = document.getElementById('anteriores');

eventos.forEach(evento => {
    const fechaEvento = new Date(evento.fecha);
    const div = document.createElement('div');
    div.classList.add('evento');
    div.innerHTML = `
        <span class="titulo">${evento.titulo}</span>
        <span class="fecha">${evento.fechaTexto}</span>
    `;

    if (fechaEvento > ahora) {
        contProximas.appendChild(div);
    } else {
        contAnteriores.appendChild(div);
    }
});

// Selecciona todos los botones de acordeón
