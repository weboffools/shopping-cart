import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { useOutletContext } from 'react-router-dom';
import styles from '../styles/shop.module.css';

const useShopItems = () => {
  const [shopItems, setShopItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SHOP_URL}`, { mode: 'cors' })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('server error');
        }
        return response.json();
      })
      .then((json) => setShopItems(json))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { shopItems, error, loading };
};

export default function Shop() {
  const { shopItems, error, loading } = useShopItems();
  const [cart, setCart] = useOutletContext();
  const products = shopItems.map((item) => (
    <ProductCard key={item.id} item={item} addCart={setCart} cart={cart} />
  ));

  if (error) return <p>{error.statusText || error.message}</p>;
  if (loading) return <p>Loading ...</p>;

  return (
    <div className="shop">
      <div className={styles.productArea}>{products}</div>
    </div>
  );
}
