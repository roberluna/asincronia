const url ="https://jsonplaceholder.typicode.com/photos";
const lista = document.getElementById("lista");

// fetch(url)
//     .then(response => {
//        return response.json();
//     })
//     .then(posts => {
//         //console.log(json)
//         //const posts = json;
//         posts.map(post => {
//             var li = document.createElement('li');
//             li.innerHTML = `<a href="detalle.html?id=${post.id}">${post.title}</a>`;
//             lista.appendChild(li);
//         })
//     })
//     .catch(error=> {
//         console.log(error)
//     })

//async await
const getPosts = async () => {

    const response = await fetch(url);
    const data = await response.json();
    data.map(post => {
                    var li = document.createElement('li');
                    li.innerHTML = `<a href="detalle.html?id=${post.id}">${post.title}</a>`;
                    lista.appendChild(li);
                 })
    return data;
}

getPosts().then(data => {
    console.log(data);
})