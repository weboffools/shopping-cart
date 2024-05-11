import styles from '../styles/cart.module.css'
import { useOutletContext } from 'react-router-dom';

export default function Cart() {
  const [cart, setCart] = useOutletContext();

  const items = cart.map(item => <li key={item.id}>{item.name}</li>); 

  return (
    <div className={styles.container}>
    <ul>
    {items} 
    </ul>

    </div>
  );
}
