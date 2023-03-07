const container = document.getElementById('container');
const template = document.getElementById('template').content;
const fragment = document.createDocumentFragment();

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f66037c393msh753864e960df220p19c3a9jsnb6a4fce3d4c6',
        'X-RapidAPI-Host': 'computer-components-api.p.rapidapi.com'
    }
};

const fetchData = async () => {
    try {
        const response = await fetch('https://computer-components-api.p.rapidapi.com/processor?limit=50&offset=0', options);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

const renderData = async () => {
    const data = await fetchData();

    data.forEach(item => {
        template.querySelector('img').setAttribute('src', item.img);
        template.querySelectorAll('p')[0].textContent = item.title;
        template.querySelectorAll('p')[1].textContent = item.model;
        template.querySelectorAll('p')[2].textContent = item.price;

        const clone = template.cloneNode(true);
        fragment.appendChild(clone);
    });

    container.appendChild(fragment);
};

document.addEventListener('DOMContentLoaded', renderData);
