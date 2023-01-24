import { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import Filter from "./components/Filter/Filter";
import Product from "./components/Products/Product";

const filters = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые']

const stock = [
  {img: './img/pizza/1.png', title: 'Пицца-туница', price: 395, popularity: 3, filters: ['Мясные']},
  {img: './img/pizza/2.png', title: 'Груша-Блю Чиз', price: 450, popularity: 4, filters: ['Вегетарианские']},
  {img: './img/pizza/3.png', title: 'Чикен бургер', price: 290, popularity: 5, filters: ['Мясные', 'Гриль']},
  {img: './img/pizza/4.png', title: 'Кордон Блю', price: 385, popularity: 10, filters: ['Мясные']},
  {img: './img/pizza/5.png', title: 'Пепперони Ранч', price: 420, popularity: 1, filters: ['Мясные', 'Гриль', 'Острые']},
  {img: './img/pizza/6.png', title: 'Чикен Ранч', price: 370, popularity: 6, filters: ['Мясные', 'Гриль', 'Острые']},
  {img: './img/pizza/7.png', title: 'Чикен Терияки', price: 500, popularity: 7, filters: ['Мясные', 'Острые']},
  {img: './img/pizza/8.png', title: 'Жюльен', price: 325, popularity: 9, filters: ['Вегетарианские']},
  {img: './img/pizza/9.png', title: '4 сезона', price: 500, popularity: 2, filters: ['Мясные', 'Гриль', 'Острые']},
  {img: './img/pizza/10.png', title: 'Сырная с ветчиной', price: 325, popularity: 8, filters: ['Мясные']},
  {img: './img/pizza/11.png', title: 'По-деревенски', price: 550, popularity: 13, filters: ['Мясные']},
  {img: './img/pizza/12.png', title: '4 Сыра', price: 425, popularity: 14, filters: ['Вегетарианские', 'Гриль']},
  {img: './img/pizza/13.png', title: 'Веджи Fit & Fresh', price: 575, popularity: 11, filters: ['Вегетарианские']},
  {img: './img/pizza/14.png', title: 'Чикен BBQ', price: 360, popularity: 15, filters: ['Мясные', 'Гриль', 'Острые']},
  {img: './img/pizza/15.png', title: 'Карамельный Ананас', price: 495, popularity: 12, filters: ['Мясные', 'Гриль', 'Острые']},
]

function App() {
  const [filter, setFilter] = useState(filters[0])
  const [sort, setSort] = useState('популярности')

  const [products, setProducts] = useState(stock)
  const [cartProducts, setCartProducts] = useState([])

  useEffect(() => {
    setProducts( prev => [...prev.sort((a, b) => a.popularity - b.popularity)] );
  }, [])

  return (
    <div className="wrapper">
      <Header 
        cartProducts={cartProducts}
      />
      <Filter 
        filter={filter} 
        setFilter={setFilter} 
        filters={filters} 
        
        sort={sort}
        setSort={setSort}

        products={products}
        setProducts={setProducts}
      />
      <div className="items">
        <h1>
          Все пиццы
          {filter !== 'Все' && <span>: {filter}</span>}
        </h1>
        <div className="products">
          {products
            .map(item => (
              filter === 'Все'
                ? <Product setCartProducts={setCartProducts} key={item.title} img={item.img} title={item.title} price={item.price} popularity={item.popularity} />
                : item.filters.includes(filter) && <Product setCartProducts={setCartProducts} key={item.title} img={item.img} title={item.title} price={item.price} popularity={item.popularity} />
              ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
