const pedirComida = new Promise((resolve, reject) => {
    resolve("comida entregada")
    // reject(Error("Error procesando el pago"));
})

//console.log(comprarComida);

//pedirComida
//.then(result => console.log(result))
// .catch(error => console.log(error))
// .finally(() => console.log("Proceso finalizado")) //cancelar icono de cargando

//manejo de varias promesas
const pagarComida = new Promise((resolve, reject) => {
    //son acciones asincronas osea no sabemos cuando va a durar
    setTimeout(() => {
        Promise.race([paypal, tarjeta]).then(proveedor => {
            resolve({
                estatus: true,
                idCliente: 4515,
                proveedor
            })
        })
        // resolve({
        //  estatus: true,
        //  idcliente: 45566
        // })
        //reject("Problema con el pago");
    }, 4000)
});

const paypal = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("paypal")
    }, 3000)
})

const tarjeta = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("tarjeta")
    }, 4000)
})

const recibirComida = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            repartidor: 88989,
            distancia: 30
        })
        //reject("Problema con el repartidor");
    }, 5000)
})

const comprarComida = () => {
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
    //         console.log("El proceso ha finalizado");
    //     })
    Promise.all([pagarComida, recibirComida])
        .then(orden => {
            console.log(orden);
        })
        .catch(error => {
            console.error(error)
        })
}

comprarComida();