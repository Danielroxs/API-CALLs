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