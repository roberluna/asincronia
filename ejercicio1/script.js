const saludar = (nombre) => {
    alert("hola " + nombre);
}

const procesarEntradaUsuario = (callback) => {
    var nombre = prompt('Ingresa tu nombre'); //1
    callback(nombre);
}

//saludar("roberto");

procesarEntradaUsuario(saludar);