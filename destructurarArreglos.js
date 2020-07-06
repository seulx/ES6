const persona = ['carlos arturo', 23, 'mexico'];

// antiguo modo .................
// const nombre = persona[0];
// const edad = persona[1];
// const pais = persona[2];
// const profesion = persona[3];

//Nuevo modo ....................
const [nombre, , pais, profesion = 'no especificado'] = persona;
//se deja ese especio para identificar que hay otro

const mostrarInfo = ( [nombre, , pais, profesion = 'No especificado'] = persona ) => console.log(nombre, profesion); 
mostrarInfo(persona);

//este codigo funciona sin embargo estoy tomando el arreglo desde fuera y no desde el parametro.

//la otra forma de hacerlo es asi:

//mostrarInfo([ nombre, ,pais ]) =>  console.log(nombre, pais);
