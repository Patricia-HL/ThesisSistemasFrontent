import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useLocation, // Importa useLocation de react-router-dom
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import LayoutPage from './Layouts/LayoutPage';
import LayoutDashboard from './Layouts/LayoutDashboard';
import ChangePasswordInitial from './pages/dashboard-pages/auth/ChangePasswordInitial';
import { publicRoutes, privateRoutes } from './routes';

const renderRoutes = (routes) => {
  return routes.map((route) => {
    if (route.collapse) {
      return renderRoutes(route.collapse);
    } else {
      return (
        <Route
          key={route.name}
          path={route.route}
          exact
          component={route.component}
        />
      );
    }
  });
};

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log('esta autenticado?', isAuthenticated);
  const isTemporaryPassword = useSelector(
    (state) => state.auth.isTemporaryPassword
  );
  console.log('tiene contraseña temporal?', isTemporaryPassword);

  // Obtén la ubicación actual
  const location = useLocation();
  console.log('Ubicación actual:', location.pathname);

  return (
    <Router>
      <Switch>
        {isAuthenticated ? (
          <>
            <LayoutDashboard
              isAuthenticated={isAuthenticated}
              privateRoutes={privateRoutes}
            >
              {' '}
              <Switch>
                {renderRoutes(privateRoutes)}
                <Redirect
                  to={isTemporaryPassword ? '/change-password' : '/dashboard'}
                />
              </Switch>
              {isTemporaryPassword && (
                <Route
                  path='/change-password'
                  component={ChangePasswordInitial}
                />
              )}{' '}
            </LayoutDashboard>
          </>
        ) : (
          <>
            <LayoutPage
              isAuthenticated={isAuthenticated}
              publicRoutes={publicRoutes}
            >
              {' '}
              <Switch>
                {renderRoutes(publicRoutes)}
                <Redirect to='/about-us' />{' '}
              </Switch>
            </LayoutPage>
          </>
        )}
      </Switch>
    </Router>
  );
};

export default App;
