const todo = (tarea, callback) => {
    callback(tarea);
}


todo("1 tomar clase de paradigmas", (tarea) => {
    setTimeout(() => {
        console.log('Tarea:' + tarea);
        todo("2 desayunar", (tarea) => {
            setTimeout(() => {
                console.log('Tarea:' + tarea);
                todo("3 videojuegos", (tarea) => {
                    setTimeout(() => {
                        console.log('Tarea:' + tarea)
                    }, 5000);
                });
            }, 4000);
        });
    }, 3000);
});