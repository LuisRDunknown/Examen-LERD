/*const cargarDrinks = () =>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f66037c393msh753864e960df220p19c3a9jsnb6a4fce3d4c6',
            'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com'
        }
    };
    
    fetch('https://pizza-and-desserts.p.rapidapi.com/pizzas', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(error => {
        console.error('Error al obtener los datos de la API:', error);
        });
}*/

const cargarDrinks = () =>{
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f66037c393msh753864e960df220p19c3a9jsnb6a4fce3d4c6',
		'X-RapidAPI-Host': 'drinks-digital1.p.rapidapi.com'
	}
};

fetch('https://drinks-digital1.p.rapidapi.com/v1/cocktails?limit=20', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
}