//nos permiten pasarle una funcion o un numero indefinido de elementos o de argumentos y nosotros poder recibirlos de una manera bastante simple

//Ejemplo de como se usaba antiguamente
// const mostrarDatos = (nombre, edad, correo, pais) => {
//     console.log(nombre, edad, correo, pais);
// }

// mostrarDatos('carlos', 23, 'correo@correo.com', 'mexico');

//Nueva manera con el parametro Rest
const mostrarDatos = (...datos) => {
    console.log(datos);
}

mostrarDatos('carlos', 23, 'correo@correo.com', 'mexico');
//con este nuevo metodo en ES6 se convierte en un arreglo y podemos iterar con el con un siclo for, el metodo map y lo que sea necesario