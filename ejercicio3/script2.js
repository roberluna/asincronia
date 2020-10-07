const todo = (tarea, duracion, callback) => {
    setTimeout(() => {
        callback(tarea);
    }, duracion)
}


todo("1 tomar clase de paradigmas", 5000, (tarea) => {
    console.log('Tarea:' + tarea);
    todo("2 desayunar", 2000, (tarea) => {
        console.log('Tarea:' + tarea);
        todo("3 videojuegos", 5000, (tarea) => {
            console.log('Tarea:' + tarea);
        });
    });
});