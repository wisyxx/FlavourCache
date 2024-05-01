import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav className="navigation">
        <Link className="navigation__link">Home</Link>
        <Link className="navigation__link">Shop</Link>
      </nav>
    </header>
  );
};

export default Header;
