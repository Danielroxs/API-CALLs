// -------------------------------------------------------------------------------- //

// Metodo GET

axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        console.log(response.data); // muestra los datos obtenidos
    })
    .catch(error => {
        console.error('Error al realizar la solicitud:', error);
    })

axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(response => {
        response.data.results.forEach((pokemon) => {
            console.log(pokemon.name);
        })
    })
    .catch((error) => {
        console.error('Error:', error);
    })

document.getElementById('fetchData').addEventListener('click', () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.error('Error:', error);
        })
})

// -------------------------------------------------------------------------------- //

// Metodo POST

axios.post('https://jsonplaceholder.typicode.com/posts', {
    title: 'Nuevo post',
    body: 'Este es un nuevo post creado con axios',
    userId: 1
})
    .then(response => {
        console.log('Datos enviado:', response.data);
    })
    .catch(error => {
        console.error('Error al enviar datos:', error);
    })

document.getElementById('postForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const title = document.getElementById('title').value
    const body = document.getElementById('body').value

    axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: title,
        body: body,
        userId: 1
    })
        .then(response => {
            console.log('Datos enviados:', response.data);
            alert('Datos enviados correctamente');
        })
        .catch(error => {
            console.error('Error al enviar datos:', error);
        })
})

axios.post('https://jsonplaceholder.typicode.com/posts', {
    title: 'Nuevo post',
    body: 'Este es un nuevo post creado con axios',
    userId: 1
}, {
    headers: {
        'Authorization': 'Bearer mi-token-de-prueba',
        'Content-Type': 'application/json'
    }
})
    .then(response => {
        console.log('Datos enviados con headers:', response.data);
    })
    .catch(error => {
        console.error('Error al enviar datos con headers:', error);
    })