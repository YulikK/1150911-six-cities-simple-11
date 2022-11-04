import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

function HeadAutorization(): JSX.Element {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <div className="header__nav-profile">
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
          </div>
        </li>
        <li className="header__nav-item">
          <Link to={AppRoute.Login} className="header__nav-link" >
            <span className="header__signout">{AuthorizationStatus.Auth ? 'Sign out' : 'Sign up'}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default HeadAutorization;
