const trailerFrame = document.getElementById('movieTrailer')
const movieInfo = JSON.parse(localStorage.getItem('selectedMovie'))

const movie = JSON.parse(localStorage.getItem('selectedMovie'));
document.title = `${movie.Title} - Trailer`;

movieTrailer.setAttribute('src', movieInfo.Trailer)