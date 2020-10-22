const app = Vue.createApp({
    data: () => ({
        users : [],
    }),
    created(){

            // fetch('https://jsonplaceholder.typicode.com/users')
            //     .then(response => response.json())
            //     .then(json => {
            //         this.users = json
            //     })
            this.getUsers();
    },
    methods: {
        getUsers() {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(json => {
                    this.users = json
                })
        },
      },
  })

//   const app = Vue.createApp({
//     data() {
//       return { count: 4 }
//     }
//   })

  const vm = app.mount('#app')