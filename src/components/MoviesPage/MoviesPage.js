import { useState, useEffect, useRef } from 'react';

import { Link } from 'react-router-dom';

import FormSearch from '../FormSearch';
import {
  //   fetchTrending,
  fetchSearch,
  // fetchMovie,
  //   fetchCastAndCrew,
  //   fetchRewvies,
} from '../../services/movies-api';

function MoviesPage() {
  const [seWord, setSeWord] = useState('');
  const [movies, setMovies] = useState(null);
  const firstStart = useRef(false);

  const handelSubmit = searchWord => {
    // console.log('Submit: ', searchWord);
    setSeWord(searchWord);
  };

  useEffect(() => {
    if (!firstStart.current) {
      firstStart.current = true;
      return;
    }
    if (seWord.length <= 2) {
      return;
    }
    // console.log('fetch');
    fetchSearch(seWord).then(r => {
      // console.log(r);
      setMovies(r.results);
    });

    return () => {};
  }, [seWord]);

  return (
    <>
      <h1>Movies search Page</h1>
      <FormSearch onSubmit={handelSubmit} />
      <hr />
      {movies && (
        <ul>
          {movies.map(t => {
            return (
              <li key={t.id}>
                <Link to={`/movies/${t.id}`}>{t.title}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default MoviesPage;
