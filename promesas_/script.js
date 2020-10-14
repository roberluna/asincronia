const pagarComida = new Promise((resolve, reject) => {
    //resolve("comida entregada")
    setTimeout(() => {
        Promise.race([paypal, tarjeta]).then(proveedor => {
            resolve({
                estatus: true,
                idCliente: 4556,
                proveedor
            })
        })
    }, 3000)
});

const paypal = new Promise((resolve, reject) => {
    //resolve("comida entregada")
    setTimeout(() => {
        resolve("pago con paypal")
    }, 5000)
});

const tarjeta = new Promise((resolve, reject) => {
    //resolve("comida entregada")
    setTimeout(() => {
        resolve("pago con tarjeta")
        //reject("problemas con el pago de tarjeta")
    }, 2000)
});

const recibirComida = new Promise((resolve, reject) => {
    //resolve("comida entregada")
    setTimeout(() => {
        resolve({
            repartidor: 45,
            distancia: 30
        })
    }, 4000)
});

const pedirComida = () => {
    // pagarComida
    //     .then(infoPago => {
    //         console.log(infoPago);
    //         return recibirComida;
    //     })
    //     .then(infoRepartidor => {
    //         console.log(infoRepartidor);
    //     })
    //     .catch(error => {
    //         console.error(error)
    //     })
    //     .finally(() => {
    //         console.log("el proceso ha finalizado");
    //     })
    Promise.all([pagarComida, recibirComida])
        .then(pedido => {
            console.log(pedido)
        })
        .catch(error => {
            console.log(error);
        })
}

pedirComida();