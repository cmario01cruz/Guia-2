const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el nombre del cliente: ', (nombreCliente) => {
    rl.question('Ingrese la cantidad de días de vigencia: ', (dias) => {

        dias = parseInt(dias);

        const hoy = new Date();

        const fechaExpiracion = new Date(hoy);
        fechaExpiracion.setDate(hoy.getDate() + dias);

        const fechaActual = hoy.toLocaleDateString('es-SV');
        const fechaLimite = fechaExpiracion.toLocaleDateString('es-SV');

        console.log('\n====================================');
        console.log('       COMPROBANTE DE RESERVA');
        console.log('====================================');
        console.log('Cliente:       ' + nombreCliente.toUpperCase());
        console.log('Fecha emisión: ' + fechaActual);
        console.log('Vigencia:      ' + dias + ' días');
        console.log('Fecha límite:  ' + fechaLimite);
        console.log('====================================');

        rl.close();
    });
});
