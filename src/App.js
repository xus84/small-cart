import { Navbar } from './components/Navbar';
import { Main } from './components/Main';
import { Basket } from './components/Basket';
import data from './data';
import './App.css';
import { useState } from 'react';

function App() {
  const {products} = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if(exist) {
      setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty +1} : x))
    } else {
      setCartItems([...cartItems, {...product, qty: 1}])
    }
  }

  return (
    <div className="App">
       <Navbar/>
       <Main onAdd={onAdd} products={products} />
       <Basket onAdd={onAdd} cartItems={cartItems} />
    </div>
  );
}

export default App;
