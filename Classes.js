// se recomienda escribir la Clase con la primera letra en mayuscula
//Las funciones dentro de una clase se le llaman metodos por igual
class Usuario { 
    constructor(nombre, edad, correo){ //esto es una variable pero de nombre es PROPIEDADES
        this.nombre = nombre,
        this.edad = edad,
        this.correo = correo
    }

    mostrarSaludo(mensaje){
        return mensaje;
    }

    mostrarInfo(){
        return `
            <b>nombre:</b> ${this.nombre} <br />
            <b>edad:</b> ${this.edad} <br />
            <b>correo:</b> ${this.correo} <br />
            
            <hr />
        `;
    }
}

//Nueva instancia de Clase Usuario
const carlos = new Usuario('Carlos Arturo', 23, 'correo@correo.com');
    document.write(carlos.mostrarInfo());

//cuando se hereda de una clase a otra con EXTENDS se tiene acceso a todas las propiedades de la CLASE de la que se hereda
class Estudiante extends Usuario{
    constructor(nombre, edad, correo, carrera){
        super(nombre, edad, correo);
        this.carrera = carrera;
    }

    mostrarInfo(){
        return `
            <b>nombre:</b> ${this.nombre} <br />
            <b>edad:</b> ${this.edad} <br />
            <b>correo:</b> ${this.correo} <br />
            <b>carrea:</b> ${this.carrera} <br />
            <hr />
        `;
    }

}

const alejandro = new Estudiante('Alejandro', 30, 'ejemplo@correo.com', 'Desarrollador Web');
     document.write(alejandro.mostrarInfo());