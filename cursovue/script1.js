const app = Vue.createApp({
    data: () => ({
        texto: "Mundo 1",
        // productos : [
        //     'cerveza',
        //     'papas',
        //     'chocolates',
        // ]
        productos : [
            {nombre: 'Cerveza', cantidad: 2,  estatus: true},
            {nombre: 'Whisky', cantidad: 0,  estatus: true},
            {nombre: 'Vino', cantidad: 4,  estatus: false},
        ],
        nuevoProducto: '',
        total: 0,
    }),
    methods: {
        agregarProducto() {
            this.productos.push(
                {nombre: this.nuevoProducto, cantidad: 0,  estatus: false}
            )
            this.nuevoProducto = '';
        },
      },
    computed: {
        sumarCantidad() {
            this.total = 0;
            for(producto of this.productos) {
                this.total = this.total + producto.cantidad;
            }
            return this.total;
        },
        voltearTexto() {
            return this.nuevoProducto.split("").reverse().join("");
        }
    },

  })

//   const app = Vue.createApp({
//     data() {
//       return { count: 4 }
//     }
//   })

  const vm = app.mount('#app')