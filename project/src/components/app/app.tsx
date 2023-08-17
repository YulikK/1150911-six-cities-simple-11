import MainScreen from '../../pages/main-screen/main-screen';
import { OfferType } from '../../types/Offer';
import LoginScreen from '../../pages/login-screen/login-screen';
import PropertyScreen from '../../pages/property-screen/property-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import Layout from '../../components/layout/layout';
import PrivateRoute from '../private-route/private-route';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const/const';

type AppScreenProps = {
  cardsCount: number;
  offers: OfferType[];
}

function App({cardsCount, offers}: AppScreenProps): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Layout/>}>
          <Route index element={<MainScreen cardsCount={cardsCount} offers={offers}/>} />
          <Route path={AppRoute.Login} element=
            {
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <LoginScreen />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Room}>
            <Route path=":id" element={<PropertyScreen/>} />
          </Route>
        </Route>
        <Route path={'*'} element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
