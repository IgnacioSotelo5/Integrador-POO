Tipo de trabajo: Integrador
Sede: San Cayetano
Módulo: POO
Consigna general: Crear un sistema de gestión de biblioteca.
Detalles funcionales:
1- Administración de biblioteca.
1.1- Creación y gestión de usuarios *
1.2- Creación y gestión de libros *
1.3- Creación y gestión de revistas *
*Gestionar estas entidades implica su creación, listado, edición y eliminación. Cada entidad debe contar con un identificador único para mantener la integridad referencial.
2- Gestión de préstamos y devoluciones.
2.1- Validar que no se pueda prestar un ítem si otro usuario lo tiene en préstamos.
2.2- Validar que no se pueda prestar un ítem si el usuario no está registrado.
2.3- Validar que no se pueda prestar un ítem si el usuario registrado está penalizado.
2.4- El préstamo debe indicar el día de inicio (fecha del préstamo) y la fecha de devolución (calcular una semana más desde la fecha de inicio).
2.5- Crear una escala de penalización que sume puntos al scoring del usuario:
	1 día después de la fecha: 2 puntos;
	entre 2 y 5 días después de la fecha: 3 puntos;
	Entre 5 y 10 días: 6 puntos.
	Mayor a 10 días: se cancela al User.
	Al acumular 6 puntos el usuario recibe una penalización que lo imposibilita de retirar ítems por el plazo de una semana.
	2.5 BIS - Si un Usuario retira un libro y lo devuelve en el plazo correcto: decrese un punto su scoring, con un límite inferior de 0 puntos.
3- Creación y gestión de estadísticas. Llevar registro de todos los préstamos en un archivo. Cada registro debería incluír la fecha del préstamos, el título y el nombre del usuario. Para crear archivos pueden utilizar el módulo File System de Node Js. Dicho módulo tiene métodos para crear y leer archivos. Ese archivo servirá de base para listar por pantalla el historial de préstamos.
4- La gestión que realiza la biblioteca debe llevarse a cabo a través de un menú de opciones. Puden construirlo con el módulo nativo de Node Js llamado Readline o una bilbioteca externa como, por ejemplo, Inquirer.# Integrador-POO
