// SELFWORK CONDIZIONI 1

let voto = 17;

if (voto < 18) {
    console.log('Insufficente');
} else if (voto >= 18 && voto < 21) {
    console.log('Sufficiente');
} else if (voto >= 21 && voto < 24) {
    console.log('Buono');
} else if (voto >= 24 && voto < 27) {
    console.log('Distinto');
} else if (voto >= 27 && voto <= 29) {
    console.log('Ottimo');
} else if (voto === 30) {
    console.log('Eccellente');
} else {
    console.log('Voto non valido!');

}

// SWITCH

switch (true) {
    case voto < 18:
        console.log('Insufficente');
        break;

    case voto >= 18 && voto < 21:
        console.log('Sufficiente');
        break;

    case voto >= 21 && voto < 24:
        console.log('Buono');
        break;

    case voto >= 24 && voto < 27:
        console.log('Distinto');
        break;

    case voto >= 27 && voto <= 29:
        console.log('Ottimo');
        break;

    case voto === 30:
        console.log('Eccellente');
        break;

        default:
            console.log('Voto non valido!');
            
}