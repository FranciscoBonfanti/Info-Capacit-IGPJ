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
        titulo: "Capacitación en gestión de Expedientes Electrónicos y Documentos Oficiales.",
        fechaTexto: "Miércoles 9 de abril - de 12:15 a 13:15 hs",
        fecha: "2025-04-09T12:15:00",
        enlace: "5oa1ooqcqPw"
    }
];

const ahora = new Date();
const contProximas = document.getElementById('proximas');
const contAnteriores = document.getElementById('anteriores');

eventos.forEach(evento => {
    const fechaEvento = new Date(evento.fecha);
    const div = document.createElement('div');
    div.classList.add('evento');

    let tituloElemento;

    if (evento.enlace && fechaEvento < ahora) {
        // Título con flechita desplegable
        tituloElemento = document.createElement('span');
        tituloElemento.classList.add('titulo');
        tituloElemento.style.cursor = 'pointer';
        tituloElemento.style.textDecoration = 'none';
        tituloElemento.style.color = 'inherit';

        const texto = document.createElement('span');
        texto.textContent = evento.titulo + " ";
        
        const flecha = document.createElement('span');
        flecha.innerHTML = "&#9660;"; // Flecha hacia abajo

        tituloElemento.appendChild(texto);
        tituloElemento.appendChild(flecha);

        tituloElemento.addEventListener('click', () => {
            const yaExiste = div.querySelector('iframe');
            if (!yaExiste) {
                const iframe = document.createElement('iframe');
                iframe.width = "560";
                iframe.height = "315";
                iframe.src = `https://www.youtube.com/embed/${evento.enlace}`;
                iframe.title = "YouTube video player";
                iframe.frameBorder = "0";
                iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
                iframe.referrerPolicy = "strict-origin-when-cross-origin";
                iframe.allowFullscreen = true;

                div.appendChild(iframe);
                flecha.innerHTML = "&#9650;"; // Flecha hacia arriba
            } else {
                yaExiste.remove();
                flecha.innerHTML = "&#9660;"; // Flecha hacia abajo
            }
        });
    } else {
        tituloElemento = document.createElement('span');
        tituloElemento.textContent = evento.titulo;
    }

    tituloElemento.classList.add('titulo');

    const fechaElemento = document.createElement('span');
    fechaElemento.classList.add('fecha');
    fechaElemento.textContent = evento.fechaTexto;

    div.appendChild(tituloElemento);
    div.appendChild(fechaElemento);

    if (fechaEvento > ahora) {
        contProximas.appendChild(div);
    } else {
        contAnteriores.appendChild(div);
    }
});
