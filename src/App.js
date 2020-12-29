import { Switch, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Container from './components/Container';
import AppNav from './components/AppNavBar';
import {
  fetchTrending,
  fetchSearch,
  fetchMovie,
  fetchCastAndCrew,
  fetchRewvies,
} from './services/movies-api';
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
      <div className="App">
        <h1>Start</h1>
      </div>
    </Container>
  );
}

export default App;
