import styles from '../styles/cart.module.css'
import { useOutletContext } from 'react-router-dom';

export default function Cart() {
  const [cart, setCart] = useOutletContext();

  const items = cart.map(item => 
    <div className={styles.cartList} key={item[0].id}>
    
    <h2>{item[0].title}</h2> 
    <h3>Quantity: {item.length}</h3>

    </div>
  ); 

  return (
    <div className={styles.container}>
    {items} 
    </div>
  );
}
