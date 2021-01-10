import { Link } from 'react-router-dom';
function TrendingList({ list }) {
  // const match = useRouteMatch();
  // console.log(match);

  return (
    <ul>
      {list.map(t => {
        return (
          <li key={t.id}>
            <Link to={`/movies/${t.id}`}> {t.title ?? t.name}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default TrendingList;
