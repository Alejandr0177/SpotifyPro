const cardTop = document.querySelector('#cardTop').content
const contenido = document.querySelector('#contenido')
const fragment = document.createDocumentFragment();
let TopTwoHundred = [];

document.addEventListener('DOMContentLoaded', () => {
    loadMusicData();
})

const loadMusicData = () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c8a5506392msh812622a5fd0f022p1698e1jsn008885405166',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };
    
    fetch('https://spotify81.p.rapidapi.com/top_200_tracks', options)
        .then(response => response.json())
        .then(response => {
            TopTwoHundred = response;
            creaCards(response);
            console.log('Canciones pa perrear con la pajarita', TopTwoHundred)
        })
        .catch(err => console.error(err));
}

const creaCards = () => {
    TopTwoHundred.forEach((song) => {
        cardTop.querySelector('img').setAttribute('src', song.trackMetadata.displayImageUri);
        cardTop.querySelector('.songName').textContent = song.trackMetadata.trackName;

        const clone = cardTop.cloneNode(true);
        fragment.appendChild(clone);
    })
    contenido.appendChild(fragment);
}