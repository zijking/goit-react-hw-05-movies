import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MovieDescription from '../MovieDescription';
import {
  //   fetchTrending,
  //   fetchSearch,
  fetchMovie,
  //   fetchCastAndCrew,
  //   fetchRewvies,
} from '../../services/movies-api';
function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovie(movieId).then(r => {
      //   console.log(r);
      setMovie(r);
    });
    return () => {};
  }, [movieId]);
  // console.log(movie);
  return (
    <>
      {movie && (
        <MovieDescription
          poster={movie.poster_path}
          title={movie.title}
          desc={movie.overview}
          genres={movie.genres}
          average={movie.vote_average}
        />
      )}
    </>
  );
}

export default MovieDetailsPage;
