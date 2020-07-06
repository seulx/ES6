function registrarUsuario(nombre, pais = 'No especificado', correo, telefono = 'No especificado' ){
    //no se utiliza porque ya hay parametros por defecto -> if (!telefono){  }

    return `Nombre: ${nombre}, Pais: ${pais}, Correo: ${correo}, Telefono: ${telefono} `
}

// console.log(registrarUsuario('carlos', 'mexico', 'correo@gmail.com', '8298520859'));
console.log(registrarUsuario('carlos', undefined, 'correo@gmail.com'));