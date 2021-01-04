import { useState, useEffect } from 'react';
import {
  fetchTrending,
  //   fetchSearch,
  //   fetchMovie,
  //   fetchCastAndCrew,
  //   fetchRewvies,
} from '../../services/movies-api';

import TrendingList from '../TrendingList';
import { Form } from 'formik';

function HomePage() {
  const [trendingList, setTrendingList] = useState([]);

  useEffect(() => {
    fetchTrending().then(r => {
      console.log(r);
      setTrendingList(r.results);
    });
    return () => {
      // cleanup
    };
  }, []);

  return (
    <>
      <h1>Home Page</h1>
      <TrendingList list={trendingList} />
    </>
  );
}

export default HomePage;
