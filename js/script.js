// Confirmación antes de eliminar un producto
function confirmDelete(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado (redirección)
    const confirmed = confirm('¿Estás seguro de eliminar este producto?');

    if (confirmed) {
        window.location.href = event.target.href; // Redirigir a la URL de eliminación
    }
}

// Agregar el evento de confirmación a los botones de eliminación
document.querySelectorAll('.delete').forEach(deleteButton => {
    deleteButton.addEventListener('click', confirmDelete);
});
