import { Outlet, useLocation } from 'react-router-dom';
import Header from '../header/header';
import { AppRoute } from '../../const/const';
import classNames from 'classnames';

function Layout(): JSX.Element {

  const isLoginScreen:boolean = useLocation().pathname === AppRoute.Login;
  const isMainScreen:boolean = useLocation().pathname === AppRoute.Root;
  const isRoomScreen:boolean = useLocation().pathname.includes(AppRoute.Room);

  const ClassNameWrap = classNames({
    'page page--gray page--login': isLoginScreen,
    'page page--gray page--main': isMainScreen,
    'page': isRoomScreen
  });

  return (
    <div className={ClassNameWrap}>
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
