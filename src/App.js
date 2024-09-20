import './App.css';
import Nav from './Component/Nav';
import Content from './Component/Content';
import Card from './Component/Card';
import data from './data';
function App() {
  const cards = data.map(item => {
    console.log(item);
    return <Card
      key={item.id}
      img={item.coverImg}
      status={item.openSpots}
      rating={item.stats.rating}
      review={item.stats.reviewCount}
      location={item.location}
      title={item.title}
      price={item.price}
    />
  })
  return (
    <div>
      <Nav />
      <Content />
      <div className="container">
        <section className="card-section" >
          {cards}
        </section>
      </div>
    </div>
  );
}

export default App;
