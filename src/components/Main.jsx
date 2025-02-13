import ItemList from './ItemList.jsx';

const Main = () => {
  return (
    <div className="main">
      <ItemList title="Top Artistas" items={6} />
      <ItemList title="Músicas em Alta" items={12} />
    </div>
  );
};

export default Main;
