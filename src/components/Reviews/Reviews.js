import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
  //   fetchTrending,
  //   fetchSearch,
  //   fetchMovie,
  //   fetchCastAndCrew,
  fetchRewvies,
} from '../../services/movies-api';

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetchRewvies(movieId).then(r => {
      //   console.log(r);
      setReviews(r.results);
    });
    return () => {};
  }, [movieId]);

  console.log(reviews);

  return <>{'No reviews'} </>;
}

export default Reviews;
