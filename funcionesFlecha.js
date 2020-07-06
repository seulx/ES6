const nombres = ['Endry', 'Alexander', 'Mena', 'Peguero'];

//optimizado
// si utilizad > {} < tienes por obligacion utilizar Return
const numero_caracteres = nombres.map(nombre => `${nombre} tiene ${nombre.length} letras` );

//sin optimizar
// const numero_caracteres = nombres.map(function(nombre){
//     return `${nombre} tiene ${nombre.length} letras`;
// });

console.log(numero_caracteres);
// .map es un metodo que nos permite iterar sobre cada uno de los elementos y ejecutar una funcion por cada uno de ellos 

// (parametro) => {
//     return // codigo a ejecutar
// }