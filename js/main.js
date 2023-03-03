let store = document.getElementById('comp')
let componet = document.getElementById('tienda').content
let fragment = document.createDocumentFragment()
let topComponets = []

document.addEventListener('DOMContentLoaded', () =>{
    Computer()
})

const Computer = () =>{
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f66037c393msh753864e960df220p19c3a9jsnb6a4fce3d4c6',
		'X-RapidAPI-Host': 'computer-components-api.p.rapidapi.com'
	}
};

fetch('https://computer-components-api.p.rapidapi.com/power_supply?limit=50&offset=0', options)
	.then(response => response.json())
	.then(response => {
        topComponets = response 
        componetsPc()
    })
	.catch(err => console.error(err));
}

const componetsPc = () =>{
    topComponets.forEach((pc) =>{
        componet.querySelector('img').setAttribute('src', pc.img)
        componet.querySelector('p')[0].textContent = pc.title
        componet.querySelector('p')[1].textContent = pc.price

        const clone = componet.cloneNode(true)
        fragment.appendChild(clone)
    })
    store.appendChild(fragment)
}
