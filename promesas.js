const promesa = new Promise((resolve, reject) => {
    //accion que se ejecutara.
    setTimeout(()=>{
        const exito = true;
        if(exito){
            resolve('La operacion tuvo exito');
        } else {
            reject('La operacion no tuvo exito');
        }
    }, 4000);
});

//con RESOLVE
promesa.then((mensaje)=>{
    alert(mensaje);
});

//con REJECT
promesa.catch((mensaje)=>{
    alert(mensaje);
});