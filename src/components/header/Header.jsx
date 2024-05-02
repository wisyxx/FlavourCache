import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <Link className="link" to="/">
        <h1 className="header__title">Shopping cart</h1>
      </Link>
      <nav className="navigation">
        <Link to="/" className="navigation__link link">
          Home
        </Link>
        <Link to="/shop" className="navigation__link link">
          Shop
        </Link>
        <Link className="navigation__link link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M17 17h-11v-14h-2" />
            <path d="M6 5l14 1l-1 7h-13" />
          </svg>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
