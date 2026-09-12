const readline = require('readline');
const rl = readline.createInterfate({
    input: process.stdin,
    output: process.stdout
});
rl.question("Ingrese el peso del paquete en kilogramos: "; (peso) => {
    rl.question('Ingrese la tarifa por kilogramo en dólares: ', (tarifa) => {
      peso = parseFloat(peso);
        tarifa = parseFloat(tarifa);

        const costoBase = peso * tarifa;
        const costoRedondeado = Math.round(costoBase);
        const costoMinimo = Math.floor(costoBase);
        const costoMaximo = Math.ceil(costoBase);

        console.log('\n====================================');
        console.log('       COTIZACIÓN DE ENVÍO');
        console.log('====================================');
        console.log('Peso:                         ' + peso.toFixed(2) + ' kg');
        console.log('Tarifa por kilogramo:         $' + tarifa.toFixed(2));
        console.log('Costo Base:                   $' + costoBase.toFixed(2));
        console.log('Costo Redondeado Tradicional: $' + costoRedondeado.toFixed(2));
        console.log('Costo Mínimo:                 $' + costoMinimo.toFixed(2));
        console.log('Costo Máximo:                 $' + costoMaximo.toFixed(2));
        console.log('====================================');

        rl.close();
    });
});
