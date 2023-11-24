// Hamburguesa
$(document).ready(function () {
    $(".show").on("click", function (event) {
        $(".hidden-list").toggle();
        event.stopPropagation(); // Evita que el click se propague al documento
    });

    $(document).on("click", function (event) {
        if (!$(event.target).closest('.show').length && !$(event.target).hasClass('hidden-list')) {
            $(".hidden-list").hide();
        }
    });
});
// Dark-mode
let container = document.getElementById("container");
let title = document.getElementById("dark-title")
let sideText = document.getElementById("dark-text")
let btn = document.getElementById("dark-btn");
btn.onclick = function () {
    container.classList.toggle("dark-theme");
    title.classList.toggle("dark-title");
    sideText.classList.toggle("dark-text");
}
// form
function validateForm() {
    // Obtener el valor del área de texto
    var feedbackValue = document.getElementById('feedback').value;

    // Validar si el área de texto está vacía
    if (feedbackValue.trim() === '') {
        alert('Por favor, completa el campo de feedback.');
        return false; // Detener el envío del formulario
    }

    // Puedes agregar más validaciones según sea necesario

    return true; // Permitir el envío del formulario
}