import Header from "./components/Header/Header";
import Filter from "./components/Filter/Filter";
import Product from "./components/Products/Product";

const filters = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые']
const sorts = ['Популярности', 'Цене', 'Алфавиту']

const stock = [
  {img: './img/pizza/1.png', title: 'Пицца-туница', price: 395},
  {img: './img/pizza/2.png', title: 'Груша-Блю Чиз', price: 450},
  {img: './img/pizza/3.png', title: 'Чикен бургер', price: 290},
  {img: './img/pizza/4.png', title: 'Кордон Блю', price: 385},
  {img: './img/pizza/5.png', title: 'Пепперони Ранч', price: 420},
  {img: './img/pizza/6.png', title: 'Чикен Ранч', price: 370},
  {img: './img/pizza/7.png', title: 'Чикен Терияки', price: 500},
  {img: './img/pizza/8.png', title: 'Жюльен', price: 325},
  {img: './img/pizza/9.png', title: '4 сезона', price: 500},
  {img: './img/pizza/10.png', title: 'Сырная с ветчиной', price: 325},
]

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Filter filters={filters} sorts={sorts} />
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
