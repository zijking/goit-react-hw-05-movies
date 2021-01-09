import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import s from './Cast.module.css';

import {
  //   fetchTrending,
  //   fetchSearch,
  //   fetchMovie,
  fetchCastAndCrew,
  //   fetchRewvies,
} from '../../services/movies-api';

function Cats() {
  const [cast, setCast] = useState(null);
  //   const match = useRouteMatch();
  const { movieId } = useParams();
  //   console.log(movieId);

  useEffect(() => {
    fetchCastAndCrew(movieId).then(r => {
      //   console.log(r.cast);
      setCast(r.cast);
    });

    return () => {};
  }, [movieId]);

  //   console.log(cast);

  return (
    <>
      {cast && (
        <ul>
          {cast.map(t => {
            return (
              <li key={t.id}>
                <img
                  className={s.castImg}
                  src={`https://image.tmdb.org/t/p/w500${t.profile_path}`}
                  alt={t.name}
                />
                <p>{t.name}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default Cats;
