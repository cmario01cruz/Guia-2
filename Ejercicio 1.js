const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el nombre completo del estudiante: ', (nombre) => {
    rl.question('Ingrese el año de nacimiento: ', (anioNacimiento) => {

        const nombreOriginal = nombre;
        const nombreFormateado = nombre.trim().toUpperCase();
        const primerNombre = nombreFormateado.split(' ')[0];

        const primerasLetras = primerNombre.slice(0, 3);
        const ultimosDigitos = anioNacimiento.slice(-2);

        const codigoUsuario = primerasLetras + ultimosDigitos + '-ESTUDIANTE';

        console.log('\n====================================');
        console.log('     GENERADOR DE USUARIO');
        console.log('====================================');
        console.log('Nombre:              ' + nombreFormateado);
        console.log('Caracteres:          ' + nombreOriginal.length);
        console.log('Código de Usuario:   ' + codigoUsuario);
        console.log('====================================');

        rl.close();
    });
});
