import Header from "./components/Header/Header";
import Filter from "./components/Filter/Filter";
import Product from "./components/Products/Product";

const filters = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые']
const stock = [
  {img: './img/pizza/1.png', title: 'Чизбургер-пицца', price: 395},
  {img: './img/pizza/2.png', title: 'Сырная', price: 450},
  {img: './img/pizza/3.png', title: 'Креветки по-азиатски', price: 290},
  {img: './img/pizza/4.png', title: 'Сырный цыпленок', price: 385},
  {img: './img/pizza/5.png', title: 'Пицца 4 сезона', price: 420},
  {img: './img/pizza/6.png', title: 'BBQ-пицца', price: 370},
  {img: './img/pizza/7.png', title: 'Дары моря', price: 500},
  {img: './img/pizza/8.png', title: 'Мясная', price: 325},
]

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Filter filters={filters} />
      <div className="items">
        <h1>Все пиццы</h1>
        <div className="products">
          {stock.map(item => (<Product key={item.title} img={item.img} title={item.title} price={item.price} />))}
        </div>
      </div>
    </div>
  );
}

export default App;
