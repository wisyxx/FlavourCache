import { Link } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = () => {
  return (
    <main className='error-page'>
      <h1 className='error-page__title'>Ups, there was a problem finding the page you're looking for</h1>
      <Link className="error-page__go-back link" to="/">
        Go back
      </Link>
    </main>
  );
};

export default ErrorPage;
