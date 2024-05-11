import { useState } from 'react';
import styles from '../styles/product.module.css';

export default function ProductCard({ item, cart, addCart }) {
  const [number, setNumber] = useState('0');

  function handleNumClick(e, dir) {
    e.preventDefault();
    if (dir === 'up') {
      setNumber(number => String(Number(number) + 1));
    } else {
      setNumber(number => String(Number(number) - 1));
    }
  }

  function handleSubmit(e, item, cart) {
    e.preventDefault();
    let num = Number(e.currentTarget.numberOfItems.value);
    let array = [...Array(num).keys()].map(() => item)
    {addCart([...cart, array])}
    {setNumber('0')}
  }

  return (
    <div className={styles.productCard}>
      <img src={item.image} />
      <h2>{item.title}</h2>
      <p>{item.price}</p>
      <form onSubmit={(e) => handleSubmit(e, item, cart)}>
        <div className={styles.number}>
          <label htmlFor="number-of-items">How Many?</label>
          <input
            id="number-of-items"
            name="numberOfItems"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          ></input>
          <button onClick={(e) => handleNumClick(e, 'up')}>⬆︎</button>
          <button onClick={(e) => handleNumClick(e, 'down')}> ⬇︎</button>
        </div>
        <button className={styles.addToCart} type="submit" >
          Add To Cart
        </button>
      </form>
    </div>
  );
}
