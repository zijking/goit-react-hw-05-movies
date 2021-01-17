import { Link, useLocation } from 'react-router-dom';
function TrendingList({ list }) {
  // const match = useRouteMatch();
  // console.log(match);

  const location = useLocation();

  return (
    <ul>
      {list.map(t => {
        return (
          <li key={t.id}>
            <Link
              to={{
                pathname: `/movies/${t.id}`,
                state: { from: location },
              }}
            >
              {t.title ?? t.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default TrendingList;
