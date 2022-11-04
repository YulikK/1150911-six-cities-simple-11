import { Outlet, useLocation } from 'react-router-dom';

import Header from '../header/header';

import { AppRoute } from '../../const';

function Layout(): JSX.Element {

  const isLoginScreen:boolean = useLocation().pathname === AppRoute.Login;
  const isMainScreen:boolean = useLocation().pathname === AppRoute.Root;
  const isRoomScreen:boolean = useLocation().pathname.includes(AppRoute.Room);

  let ClassNameWrap = '';
  ClassNameWrap += isLoginScreen ? 'page page--gray page--login' : '';
  ClassNameWrap += isMainScreen ? 'page page--gray page--main' : '';
  ClassNameWrap += isRoomScreen ? 'page' : '';

  return (
    <div className={ClassNameWrap}>
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
