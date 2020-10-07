const cuadrado = (valor, callback) => {
    callback(valor, valor * valor);
}

cuadrado(2, (valor, resultado) => {
    console.log(`el cuadrado de ${valor} = ${resultado}`);
    cuadrado(3, (valor, resultado) => {
        console.log(`el cuadrado de ${valor} = ${resultado}`);
        cuadrado(4, (valor, resultado) => {
            console.log(`el cuadrado de ${valor} = ${resultado}`);
            cuadrado(5, (valor, resultado) => {
                console.log(`el cuadrado de ${valor} = ${resultado}`);
                cuadrado(6, (valor, resultado) => {
                    console.log(`el cuadrado de ${valor} = ${resultado}`);
                    cuadrado(7, (valor, resultado) => {
                        console.log(`el cuadrado de ${valor} = ${resultado}`);
                        cuadrado(8, (valor, resultado) => {
                            console.log(`el cuadrado de ${valor} = ${resultado}`);
                            cuadrado(9, (valor, resultado) => {
                                console.log(`el cuadrado de ${valor} = ${resultado}`);
                                cuadrado(10, (valor, resultado) => {
                                    console.log(`el cuadrado de ${valor} = ${resultado}`);
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});