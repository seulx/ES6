const texto = 'hola mundo endry';

console.log(texto, 'empieza con h:', texto.toLowerCase().startsWith('h'));

console.log(texto, 'termina con o:', texto.toLowerCase().endsWith('o'));

console.log(texto, 'incluye a endry', texto.includes('endry'));

const amigos = ['carlos', 'endry', 'nepo'];

console.log(amigos.includes('nepo'));

console.log(amigos.find(amigo => amigo.length <= 5));

console.log(amigos.findIndex(amigo => amigo === 'nepo'));