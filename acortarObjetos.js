const crearObjeto = (nombre, edad) => {
    //nueva forma en ES6..........................
    return {
        nombre,
        edad,
        //forma para agregar metodos dentro de un objeto
        mostrarInfo(){
            return `${nombre} tiene ${edad} años`;
        }
    }
    //antiguamente................................
    return {
        nombre: nombre,
        edad: edad,
        mostrarInfo: () => {
            return `${nombre} tiene ${edad} años`;
        }
    }
}

console.log(crearObjeto('carlos', 23).mostrarInfo());