document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".accordion-button");

    buttons.forEach((button) => {
        button.addEventListener("click", function (e) {
            const content = this.nextElementSibling;

            // Si no tiene contenido desplegable, no hacer nada
            if (!content || !content.classList.contains("accordion-content")) return;

            e.preventDefault(); // opcional: evita salto de página si es un <a>
            const isActive = this.classList.contains("active");

            // Cerrar todos
            document.querySelectorAll(".accordion-button").forEach(btn => {
                btn.classList.remove("active");
                if (btn.nextElementSibling && btn.nextElementSibling.classList.contains("accordion-content")) {
                    btn.nextElementSibling.style.display = "none";
                }
            });

            // Abrir si estaba cerrado
            if (!isActive) {
                this.classList.add("active");
                content.style.display = "block";
            }
        });
    });
});

