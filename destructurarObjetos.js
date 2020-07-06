const usuario = {
    nombre: 'Carlos',
    correo: 'correo@correo.com',
    edad: 22,
    pais: 'Mexico',
    
    
}

const {nombre, pais, profesion = 'No especifado'} = usuario;

const mostrarInfo = ( { nombre, profesion = 'Estudiante' } ) => console.log(`${nombre} es ${profesion}`);
mostrarInfo(usuario);