import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from '../pages/Home';
import Product from '../pages/Product';
import Checkout from '../pages/Checkout';
import styles from '../styles/nav.module.scss';
import CartIcon from '../Utils/Cart';
import Login from '../pages/Login';

const App = () => {
  return (
    <Router>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to='/'>Home/Logo</Link>
          </li>
          <li>
            <ul>
              <li>
                <Link to='/login'>Login</Link>
              </li>
              <li>
                <Link to='/contact'>Talk to us</Link>
              </li>
              <li>
                <Link to='/checkout'>
                  <CartIcon />
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route
          path='/'
          element={<HomePage />}
        />
        <Route
          path='/product'
          element={<Product />}
        />
        <Route
          path='/login'
          element={<Login />}
        />
        <Route
          path='/checkout'
          element={<Checkout />}
        />
      </Routes>
    </Router>
  );
};

export default App;
