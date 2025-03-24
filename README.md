# Tienda de Productos

Este proyecto es un sistema básico de CRUD (Crear, Leer, Actualizar, Eliminar) para gestionar productos en una tienda, desarrollado con PHP y MySQL.

## 📁 Estructura del Proyecto
```
mi_crud_productos/
├── index.php       # Página principal: Lista los productos
├── crear.php       # Formulario para agregar productos
├── editar.php      # Formulario para editar productos
├── eliminar.php    # Script para eliminar un producto
├── conexion.php    # Configuración de la conexión a la base de datos
├── css/
│   └── style.css   # Estilos de la aplicación
├── js/
│   └── script.js   # JavaScript para confirmaciones
└── sql/
    └── base_datos.sql # Script para crear la base de datos
```

## 🗄️ Configuración de la Base de Datos
### 1️⃣ Crear la Base de Datos
Ejecuta el siguiente SQL en phpMyAdmin o en tu servidor MySQL:
```sql
CREATE DATABASE mi_crud;
USE mi_crud;

CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    descripcion TEXT NOT NULL
);
```

### 2️⃣ Configurar la Conexión a la Base de Datos
En el archivo **conexion.php**:
```php
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mi_crud";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
?>
```

## 🚀 Despliegue del Proyecto
1. Inicia **XAMPP** y activa Apache y MySQL.
2. Copia la carpeta `mi_crud_productos` en `htdocs` de XAMPP.
3. Importa el archivo `sql/base_datos.sql` en phpMyAdmin.
4. Abre el navegador y accede a `http://localhost/mi_crud_productos/`.


