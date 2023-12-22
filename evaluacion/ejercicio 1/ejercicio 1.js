'use strict';

function Student(nombre, correo, promedio) {
    this.nombre = nombre;
    this.correo = correo;
    this.promedio = promedio; 

    this.verificarPromedio = function() {
        return this.promedio > 70 ? "Aprobado" : "Reprobado";
    };

    this.obtenerUsuario = function() {
        const partesCorreo = this.correo.split('@');
        return partesCorreo[0];
    };
} 

let studentOne = new Student("Diego", "llanghidiego@gmail.com", 75);

alert("Verificar promedio: " + studentOne.verificarPromedio());
alert("Obtener usuario: " + studentOne.obtenerUsuario());
