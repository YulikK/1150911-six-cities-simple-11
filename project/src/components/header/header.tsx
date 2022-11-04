import { useLocation } from 'react-router-dom';

import HeadAuthorization from '../head-authorization/head-authorization';
import Logo from '../logo/logo';

import { AppRoute } from '../../const';


function Header(): JSX.Element {
  const isLoginScreen = useLocation().pathname !== AppRoute.Login;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          {isLoginScreen && <HeadAuthorization />}
        </div>
      </div>
    </header>
  );
}
export default Header;
