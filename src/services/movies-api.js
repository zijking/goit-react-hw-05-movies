/**API ключ (v3 auth)
4f0ea4354c438b28338189c5142741bd
Приклад API-запиту
https://api.themoviedb.org/3/movie/550?api_key=4f0ea4354c438b28338189c5142741bd
 
Токен доступу для читання API (v4 auth)
eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZjBlYTQzNTRjNDM4YjI4MzM4MTg5YzUxNDI3NDFiZCIsInN1YiI6IjVmZTZkZmVjMTYwZTczMDAzY2FlOWM1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ISy2RTUaCvD4A3GZluW11qnx774KKs0e-80I3NiQ1Gs
*/

const KEY = '4f0ea4354c438b28338189c5142741bd';

const BASE_URL = 'https://api.themoviedb.org/3/';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

//список самых популярных фильмов на сегодня для создания коллекции на главной странице.
export function fetchTrending() {
  return fetchWithErrorHandling(`${BASE_URL}trending/movie/day?api_key=${KEY}`);
}

//поиск кинофильма по ключевому слову на странице фильмов.
export function fetchSearch(query, page = 1) {
  return fetchWithErrorHandling(
    `${BASE_URL}search/movie?api_key=${KEY}&language=uk-UA&query=${query}&page=${page}&include_adult=false`,
  );
}

//запрос полной информации о фильме для страницы кинофильма.
export function fetchMovie(idMuvie) {
  return fetchWithErrorHandling(
    `${BASE_URL}movie/${idMuvie}?api_key=${KEY}&language=uk-UA`,
  );
}

//запрос информации о актёрском составе для страницы кинофильма
export function fetchCastAndCrew(idMuvie) {
  return fetchWithErrorHandling(
    `${BASE_URL}movie/${idMuvie}/credits?api_key=${KEY}&language=uk-UA`,
  );
}

//запрос обзоров для страницы кинофильма
export function fetchRewvies(idMuvie, page = 1) {
  return fetchWithErrorHandling(
    `${BASE_URL}movie/${idMuvie}/reviews?api_key=${KEY}&language=ue-US&page=${page}`,
  );
}
