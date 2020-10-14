const miFuncion = async () => {
    //return "hola mundo"
    return Promise.resolve("HOla mundo");
}

miFuncion().then(data => {
    console.log(data)
})

const obtenerClima = () => {
  return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve("El clima es de 30 grados")
        //reject("error")
      },4000)
  })
}

const obtenerTrafico = () => {
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve("sin trafico")
        },5000)
    })
}

const planViaje = async () => {
    // obtenerClima().then(data => {
    //     console.log(data);
    //     return obtenerTrafico();
    // })
    // .then(data => {
    //     console.log(data)
    // })

    // const clima = await obtenerClima();
    // const trafico = await obtenerTrafico();
    // return [clima, trafico];
    try {
        const clima =  obtenerClima();
        const trafico =  obtenerTrafico();
        const plan = await Promise.all([clima,trafico]);
        return plan;
    } catch(error) {
        throw(error);
    }

}

planViaje()
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log(error)
    })
