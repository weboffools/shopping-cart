import { Link, Outlet } from 'react-router-dom';
export default function Root() {
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
        </div>
    <div className='main'>
    <Outlet />
    </div>
      </div>
    </>
  );
}
