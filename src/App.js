import Header from "./components/Header/Header";
import Filter from "./components/Filter/Filter";
import Product from "./components/Products/Product";

const filters = ['Мясные', 'Вегетарианские', 'Гриль', 'Острые']
const stock = [
  {img: './img/pizza/1.png', title: 'Чизбургер-пицца', price: 395}
]

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Filter filters={filters} />
      <div className="items">
        <h1>Все пиццы</h1>
        {stock.map(item => (<Product key={item.title} img={item.img} title={item.title} price={item.price} />))}
      </div>
    </div>
  );
}

export default App;
