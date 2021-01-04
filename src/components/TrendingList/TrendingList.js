function TrendingList({ list }) {
  return (
    <ul>
      {list.map(t => {
        return <li key={t.id}>{t.original_title ?? t.name}</li>;
      })}
    </ul>
  );
}

export default TrendingList;
