import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';

export default function Root() {
  const [cart, setCart] = useState([]);

  const num = (cart.reduce((acc, curr) => acc + curr.length, 0))

  return (
    <>
      <div className="container">
        <div className="sidebar">
          <h1 className="shop-name">Guido&apos;s Glamorous Goods</h1>
          <nav>
            <ul>
              <Link className="nav-link" to="/home">
                Home
              </Link>
              <Link className="nav-link" to="/shop">
                Shop
              </Link>
            </ul>
          </nav>
    <div className='cart'>
        <h2>Your Cart</h2>
        <p>You have {num} items</p>
        <Link className="view-cart" to="/cart">View Cart</Link>
    </div>
        </div>
    <div className='main'>
    <Outlet context={[cart, setCart]}/>
    </div>
      </div>
    </>
  );
}
