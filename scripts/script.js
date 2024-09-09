import { getData } from "../helpers/getData.js"
import { searchData } from "../helpers/searchData.js";
import { showCard } from "../helpers/showCard.js";
import { showMovies } from "../helpers/showMovies.js";

const urlMovies = 'https://api-movies-pi.vercel.app/movies'
const urlFavoritos = 'https://api-movies-pi.vercel.app/favorites'
const allMoviesContainer = document.getElementById('moviesContainer')

document.addEventListener("DOMContentLoaded", async () => {
  localStorage.setItem('selectedMovie', "")
  const movies = await getData(urlMovies);
  showMovies(allMoviesContainer, movies);

  // Función para buscar:

  const searchForm = document.getElementById('searchForm');

  searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchInput = document.getElementById('searchInput').value;

    const searchResult = await searchData(searchInput, movies, "Title")
    showMovies(allMoviesContainer, searchResult);
  })
})



// Filtrado por género
const linksCategorias = document.querySelectorAll('.category-link');
linksCategorias.forEach((link) => {
  link.addEventListener("click", async (e) => {
    const newRquestUrl = `${urlMovies}?Type=${link.innerHTML}`

    const moviesByType = await getData(newRquestUrl);
    showMovies(allMoviesContainer, moviesByType);
  })
})

//Traer favoritos
const linkFavoritos = document.getElementById('favoritesLink');
linkFavoritos.addEventListener("click", async () => {
  const favoritos = await getData(urlFavoritos);

  showMovies(allMoviesContainer, favoritos);
})