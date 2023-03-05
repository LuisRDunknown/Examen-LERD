let sala = document.getElementById('sala')
let cine = document.getElementById('cine').content
let fragment = document.createDocumentFragment()
let miArray = [];

document.addEventListener('DOMContentLoaded', () =>{
    cines()
})

const cines = () =>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f66037c393msh753864e960df220p19c3a9jsnb6a4fce3d4c6',
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
    };
    
    fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20of%20thr', options)
	.then(response => response.json())
	.then(response => {
        miArray = response 
        salas()
    })
    .catch(err => {
        console.log('Se ha producido un error: ', err);
      });
      
}

const salas = () => {

    miArray.forEach((movi) =>{

        cine.querySelector('img').setAttribute('src', movi.d.i.imageUrl)

        const clone = cine.cloneNode(true)
        fragment.appendChild(clone)
    })
    sala.appendChild(fragment)
}
