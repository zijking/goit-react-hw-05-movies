import { Switch, Route } from 'react-router-dom';
// import { v4 as uuidv4 } from 'uuid';
import Container from './components/Container';
import AppNav from './components/AppNavBar';
import HomePage from './components/HomePage';
import MoviesPage from './components/MoviesPage';
import MovieDetailsPage from './components/MovieDetailsPage';

import NotFound from './views/NotFound';
// import {
//   fetchTrending,
//   fetchSearch,
//   fetchMovie,
//   fetchCastAndCrew,
//   fetchRewvies,
// } from './services/movies-api';
import './App.css';

function App() {
  // fetchTrending().then(r => console.log(r));
  // fetchSearch('harry').then(r => console.log(r));
  // fetchMovie(671).then(r => console.log(r));
  // fetchCastAndCrew(671).then(r => console.log(r));
  // fetchRewvies(671).then(r => console.log(r));

  return (
    <Container>
      <AppNav />

      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/movies" exact>
          <MoviesPage />
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
