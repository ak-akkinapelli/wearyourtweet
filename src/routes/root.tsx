// App.tsx or root.tsx

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from '../pages/Home';
import Product from '../pages/Product';
import Checkout from '../pages/Checkout';
const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/checkout'>Checkout</Link>
          </li>
          <li>
            <Link to='/product'>Product</Link>
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
          path='/checkout'
          element={<Checkout />}
        />
      </Routes>
    </Router>
  );
};

export default App;
