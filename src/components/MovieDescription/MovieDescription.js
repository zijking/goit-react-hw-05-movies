import { NavLink, useRouteMatch, Route, useParams } from 'react-router-dom';
import s from './MovieDescription.module.css';
import Cast from '../Cast';
import Reviews from '../Reviews';
// import { baseImageUrl } from '../../services/baseUrl';

function MovieDescription({ poster, title, desc, genres, average }) {
  const baseUrl = 'https://image.tmdb.org/t/p/w500';
  const { movieId } = useParams();
  const { url } = useRouteMatch();
  // console.log(url);
  // console.log(movieId);
  return (
    <div>
      <div className={s.movieContainer}>
        <div className={s.moviePoster}>
          <img src={`${baseUrl}${poster}`} alt={title} />
        </div>

        <div className={s.movieDesc}>
          <p className={s.movieTitle}> {title}</p>
          <p>Average: {average} </p>
          <p>{desc}</p>

          <ul>
            {genres.map((t, index) => {
              return <li key={index}>{t.name}</li>;
            })}
          </ul>
        </div>
      </div>
      <hr />
      <div className={s.additionInfo}>
        <p>Additional information</p>
        <p>
          <NavLink to={`${url}/Cast`}>Cats</NavLink>
        </p>
        <p>
          <NavLink to={`${url}/Rewies`}>Rewies</NavLink>
        </p>
      </div>
      <hr />
      <Route path={`/movies/:movieId/Cast`}>
        <Cast />
      </Route>
      <Route path={`/movies/:movieId/Rewies`}>
        <Reviews />
      </Route>
    </div>
  );
}

export default MovieDescription;
