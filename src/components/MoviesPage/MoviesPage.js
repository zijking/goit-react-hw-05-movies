import { useState, useEffect, useRef } from 'react';

import { Link, useHistory, useLocation } from 'react-router-dom';

import FormSearch from '../FormSearch';
import {
  //   fetchTrending,
  fetchSearch,
  // fetchMovie,
  //   fetchCastAndCrew,
  //   fetchRewvies,
} from '../../services/movies-api';

function MoviesPage() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query') ?? '';

  const [seWord, setSeWord] = useState(query);
  const [movies, setMovies] = useState(null);
  const history = useHistory();

  // console.log(history);

  const firstStart = useRef(false);

  // const onSortOrderChange = seWord => {
  //   history.push({ ...location, search: `query=${seWord}` });
  // };

  const handelSubmit = searchWord => {
    // console.log('Submit: ', searchWord);
    setSeWord(searchWord);
  };

  useEffect(() => {
    if (!firstStart.current && seWord === '') {
      firstStart.current = true;
      return;
    }
    if (seWord.length <= 2) {
      return;
    }

    // console.log('fetch');
    history.push({ ...location, search: `query=${seWord}` });
    fetchSearch(seWord).then(r => {
      // console.log(r);
      setMovies(r.results);
    });

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
