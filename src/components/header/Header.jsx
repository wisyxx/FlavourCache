import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="navigation">
        <Link to="/" className="navigation__link">
          Home
        </Link>
        <Link to="/shop" className="navigation__link">
          Shop
        </Link>
      </nav>
    </header>
  );
};

export default Header;
