import { getData } from "../helpers/getData.js";
import { postData } from "../helpers/postData.js";
import { showMovies } from "../helpers/showMovies.js";

const movie = JSON.parse(localStorage.getItem('selectedMovie'));
document.title = movie.Title;
const urlMovies = 'https://api-movies-pi.vercel.app/movies'


// Información de la película
const movieImage = document.getElementById('movieImage');
const movieTitle = document.getElementById('movieTitle');
const movieRating = document.getElementById('movieRating');
const movieYear = document.getElementById('movieYear');
const movieDescription = document.getElementById('movieDescription');

movieImage.setAttribute('src', movie.Carrusel);
movieImage.style.width = '100vw'
movieTitle.textContent = movie.Title;
movieRating.textContent = `${movie.Value * 10}%`;
movieYear.textContent = movie.Year
movieDescription.textContent = movie.Description;

// Funcionalidad del Trailer
const trailerButton = document.getElementById('trailerButton');
trailerButton.addEventListener('click', () => {
  window.location.href = './trailer.html';
})

// Funcionalidad del Botón de Favorito
const favoriteButton = document.getElementById('favoriteButton');

favoriteButton.addEventListener('click', async() => {
  // const favoritosStorage = JSON.parse(localStorage.getItem('favoritos'));

  await postData('https://api-movies-pi.vercel.app/favorites', movie)

  // if (favoritosStorage.find((item) => item.id === movie.id)){
  //   alert('Esta película ya está en tus favoritos');
  // } else if (!favoritosStorage) {
  //   let favoritesArray = [];
  //   favoritesArray.push(movie);
  //   localStorage.setItem('favoritos', JSON.stringify(favoritesArray));
  // } else {
  //   favoritosStorage.push(movie);
  //   localStorage.setItem('favoritos', JSON.stringify(favoritosStorage));
  // }
})

// Funcionalidad para mostrar Similares
const youMayLike = document.getElementById('similares')
document.addEventListener('DOMContentLoaded', async () => {
  const movies = await getData(urlMovies);
  const similares = movies.filter((element) => element.Type === movie.Type);
  console.log(similares);
  showMovies(youMayLike, similares);
})





