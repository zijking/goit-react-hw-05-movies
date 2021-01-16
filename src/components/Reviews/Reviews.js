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
      // console.log(r);
      const rez = r.results;
      if (rez.length === 0) {
        setReviews(null);
      } else {
        setReviews(rez);
      }
    });
    return () => {};
  }, [movieId]);

  // console.log(reviews);

  return (
    <>
      {(reviews && (
        <ul>
          {reviews.map(t => {
            return (
              <li key={t.id}>
                <p>
                  <b>{t.author}</b> {t.content}
                </p>
              </li>
            );
          })}
        </ul>
      )) ||
        "We don't have any reviews for this movie."}
    </>
  );
}

export default Reviews;
